$(document).ready(function () {


    (function ($) {
        "use strict";


        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function () {
            $('#contactForm').submit(function (e) {
                e.preventDefault();
            }).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    'phone-number': {
                        required: true,
                        minlength: 10
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "come on, you have a name, don't you?",
                        minlength: "your name must consist of at least 2 characters"
                    },
                    subject: {
                        required: "come on, you have a subject, don't you?",
                        minlength: "your subject must consist of at least 4 characters"
                    },
                    'phone-number': {
                        required: "come on, you have a number, don't you?",
                        minlength: "your Number must consist of at least 10 characters"
                    },
                    email: {
                        required: "no email, no message"
                    },
                    message: {
                        required: "um...yea, you have to write something to send this form.",
                        minlength: "thats all? really?"
                    }
                },
                submitHandler: function (form) {

                    // handles form submit without any jquery
                    document.getElementById("submit-loading").innerText = "Submitting...";

                    var formData = getFormData(form);
                    var data = formData.data;

                    // If a honeypot field is filled, assume it was done so by a spam bot.
                    if (formData.honeypot) {
                        return false;
                    }

                    var url = form.action;
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", url);
                    // xhr.withCredentials = true;
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            form.reset();
                            var formElements = form.querySelector(".form-elements");
                            if (formElements) {
                                formElements.style.display = "none"; // hide form
                            }
                            document.getElementById("contactForm").style.display='none';
                            document.getElementById("contactForm_heading").style.display='none';
                            document.getElementById("success_message").style.display='block';
                        }
                    };
                    // url encode form data for sending as post data
                    var encoded = Object.keys(data)
                        .map(function (k) {
                            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
                        })
                        .join("&");
                    xhr.send(encoded);
                }
            })
        })

        function getFormData(form) {
            var elements = form.elements;
            var honeypot;

            var fields = Object.keys(elements)
                .filter(function (k) {
                    if (elements[k].name === "honeypot") {
                        honeypot = elements[k].value;
                        return false;
                    }
                    return true;
                })
                .map(function (k) {
                    if (elements[k].name !== undefined) {
                        return elements[k].name;
                        // special case for Edge's html collection
                    } else if (elements[k].length > 0) {
                        return elements[k].item(0).name;
                    }
                })
                .filter(function (item, pos, self) {
                    return self.indexOf(item) == pos && item;
                });

            var formData = {};
            fields.forEach(function (name) {
                var element = elements[name];

                // singular form elements just have one value
                formData[name] = element.value;

                // when our element has multiple items, get their values
                if (element.length) {
                    var data = [];
                    for (var i = 0; i < element.length; i++) {
                        var item = element.item(i);
                        if (item.checked || item.selected) {
                            data.push(item.value);
                        }
                    }
                    formData[name] = data.join(", ");
                }
            });

            // add form-specific values into the data
            formData.formDataNameOrder = JSON.stringify(fields);
            formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
            formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

            return { data: formData, honeypot: honeypot };
        }


    })(jQuery)
})