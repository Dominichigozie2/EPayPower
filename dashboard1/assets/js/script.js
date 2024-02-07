// ================ left side js ===================
$(document).ready(function () {
    $(document).on('click', '#sidebar li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});



// ================================= left menu dp toogle -========
$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle(100);
    $(this).find(".right").toggleClass("fa-angle-right fa-angle-down");
});




// -=========== sidebar toggle ============
$(document).ready(function () {
    $("#toggleSidebar").click(function () {
        $(".left-menu").toggleClass("hide");
        $(".content-wrapper").toggleClass("hide")
    });
});
// const toggleBarIcon = document.querySelector(".fa-bars-staggered");
// const sideBar = document.querySelector('.left-menu');
// const content = document.querySelector('.content-wrapper');
// const quote = document.querySelector('.left-menu .side-logout');
// const sideBarul = document.querySelector('.left-menu #sidebar');


// // stored in localStorage
// const isSidebarHidden = localStorage.getItem('sidebarHidden') === 'true';

// // initial state based on localStorage
// sideBar.classList.toggle('hide', isSidebarHidden);
// sideBar.style.maxWidth = isSidebarHidden ? '0' : '260px';
// content.style.width = isSidebarHidden ?  'calc(100% - 0)' : 'calc(100% - 260px)';
// content.style.marginLeft = isSidebarHidden ? '0' : '260px';

// toggleBarIcon.addEventListener('click', function () {
//     const isHidden = sideBar.classList.toggle('hide');

//     localStorage.setItem('sidebarHidden', isHidden);

//     sideBar.style.maxWidth = isHidden ? '0' : '260px';
//     content.style.width = isHidden ? 'calc(100% - 0)': 'calc(100% - 260px)';
//     content.style.marginLeft = isHidden ? '0' : '260px';
// });

// // Hover hidden
// sideBar.addEventListener('mouseenter', function () {
//     if (sideBar.classList.contains('hide')) {
//         sideBar.style.maxWidth = '260px';

//         quote.style.display = 'flex';
//     }
// });

// sideBar.addEventListener('mouseleave', function () {
//     if (sideBar.classList.contains('hide')) {
//         sideBar.style.maxWidth = '0';

//         quote.style.display = 'none';
//     }
// });



// ============ share to social link ===========

function shareOnSocialMedia(platform) {
    var referralLink = "https://example.com/referral?code=YOUR_REFERRAL_CODE";

    switch (platform) {
        case 'facebook':
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(referralLink), '_blank');
            break;


        case 'twitter':
            window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(referralLink), '_blank');
            break;

        case 'whatsapp':
            window.open('whatsapp://send?text=' + encodeURIComponent(referralLink), '_blank');
            break;

        default:
            // Handle other platforms or unknown cases
            break;
    }
}


// ---------------- copy referral link ----------------
function copyReferralLink() {
    var referralLinkInput = document.getElementById('referralLink');
    referralLinkInput.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
}



// ===================== language ===============
$(function () {
    $('.selectpicker').selectpicker();
    $('pick__lang').selectpicker();
});



//=================Airtime Active step ====================
function goToStep(stepNumber) {
    document.getElementById('step1Container').classList.add('hidden');
    document.getElementById('step2Container').classList.add('hidden');
    document.getElementById('step3Container').classList.add('hidden');

    var nextStepContainer = document.getElementById('step' + stepNumber + 'Container');
    if (nextStepContainer) {
        nextStepContainer.classList.remove('hidden');
    }

    updateActiveStep(stepNumber);
}

function updateActiveStep(step) {
    for (var i = 1; i == 3; i++) {
        document.getElementById('line' + i).classList.remove('active-step');
    }

    document.getElementById('line' + step).classList.add('active-step');

    // Store the active step in local storage
    localStorage.setItem('activeStep', step);
}

// Clear localStorage on page load
window.onload = function () {
    localStorage.removeItem('activeStep');
};

document.addEventListener('DOMContentLoaded', function () {

    var storedActiveStep = localStorage.getItem('activeStep');

    if (storedActiveStep) {
        goToStep(storedActiveStep);
    } else {
        goToStep(1);
    }
});

document.getElementById('continueButton').addEventListener('click', function () {
    loadAndGoToStep(2);
});

// goToStep(1);

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('step1Form');
    var continueButton = document.getElementById('continueButton');

    // Add event listeners to input fields
    form.addEventListener('input', function () {
        var network = document.getElementById('network').value;
        var deviceId = document.getElementById('deviceId').value;
        var amount = document.getElementById('amount').value;
        var email = document.getElementById('email').value;

        // Enable continue button if all fields are filled
        if (network && deviceId && amount) {
            continueButton.classList.remove('disabled');
        } else {
            continueButton.classList.add('disabled');
        }
    });
});

// Display loading spinner
function loadAndGoToStep(step) {
    document.getElementById('continueButtonLoader').classList.remove('d-none');

    setTimeout(function () {
        // Hide loading spinner
        document.getElementById('continueButtonLoader').classList.add('d-none');
        // Navigate to the specified step
        goToStep(step);
    }, 2000); // Adjust the loading time as needed (in milliseconds)
}



// -------------payment modal
$(document).ready(function () {
    // Menu Toggle Script
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // For highlighting activated tabs and showing corresponding menu
    $(".tabs").click(function () {
        $(".tabs").removeClass("active1 bg-light").addClass("bg-light");
        $(this).removeClass("bg-light").addClass("active1");

        // Get the target menu id from the href attribute
        var targetMenuId = $(this).attr("href");
        $(".tab-pane").removeClass("in active");
        $(targetMenuId).addClass("in active");
    });

    $(document).ready(function () {
        // Initialize
        $('.cr_no').payment('formatCardNumber');
        $('.cr-ed').payment('formatCardExpiry');
        $('.cvvpasw').payment('formatCardCVC');

        $(".cr_no, .cr-ed, .cvvpasw").on("input", function () {
            var cardNumber = $(".cr_no").val().trim();
            var expiryDate = $(".cr-ed").val().trim();
            var cvv = $(".cvvpasw").val().trim();

            // Check if all fields are filled out correctly
            if (cardNumber.length === 19 && expiryDate.length === 7 && cvv.length === 3) {
                // Show PIN input fields
                $(".react-reveal").show();
                // Enable the "Continue" button
                $(".cr_botton").prop("disabled", false);
            } else {
                // Hide PIN input fields
                $(".react-reveal").hide();
                // Disable the "Continue" button
                $(".cr_botton").prop("disabled", true);
            }
        });

        document.getElementById('cr_no').addEventListener('input', function () {
            var cardNumber = this.value.replace(/\s/g, '');
            var cardTypeSpan = document.querySelector('.card-type');

            // Remove previous card type class
            cardTypeSpan.className = 'card-type';

            // Check the first digit of the card number to determine the card type
            if (cardNumber.startsWith('4')) {
                cardTypeSpan.classList.add('Visa');
            } else if (cardNumber.startsWith('51') || cardNumber.startsWith('2') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')) {
                cardTypeSpan.classList.add('MasterCard');
            } else if (cardNumber.startsWith('6')) {
                cardTypeSpan.classList.add('verve');
            }
        });


        // Event listener for PIN input fields
        $(".cr_pin").on("input", function () {
            var pin1 = $("input[name='pin1']").val().trim();
            var pin2 = $("input[name='pin2']").val().trim();
            var pin3 = $("input[name='pin3']").val().trim();
            var pin4 = $("input[name='pin4']").val().trim();

            // Check if all PIN inputs are filled out
            if (pin1.length === 1 && pin2.length === 1 && pin3.length === 1 && pin4.length === 1) {
                // Enable the "Continue" button if all PIN inputs are filled out
                $(".cr_botton").prop("disabled", false);
            } else {
                // Disable the "Continue" button if any PIN input is missing
                $(".cr_botton").prop("disabled", true);
            }
        });
    });

    // TRANSFER DETAILS --------
    $(document).ready(function () {
        // Event listener for clicking on tab1
        $("#tab1").click(function () {
            // Show the loading element
            $(".loading").show();
            // Hide the transfer-details section
            $(".transfer-details").hide();
            // Simulate loading delay (you can replace this with your actual loading process)
            setTimeout(function () {
                // Hide the loading element
                $(".loading").hide();
                // Show the transfer-details section
                $(".transfer-details").show();
            }, 2000); // Adjust the delay time as needed (e.g., 2000 milliseconds = 2 seconds)
        });
    });

});

// Function to start the countdown timer
function startTimer() {
    var timeLeft = 40 * 60; // 40 minutes in seconds
    var timerElement = $(".counter-time");

    var countdownInterval = setInterval(function () {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        // Update the timer element
        timerElement.text(minutes + " mins " + seconds + " secs");

        // Check if the countdown has finished
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            timerElement.text("Expired");
        } else {
            timeLeft--; // Decrease the time left by 1 second
        }
    }, 1000); // Update the timer every second
}
startTimer();

// --------bank ussd select ------------------
document.addEventListener("DOMContentLoaded", function () {
    // Get select element
    var bankSelect = document.getElementById('bankSelect');

    // Get select-ussd div
    var ussdDetails = document.getElementById('ussdDetails');

    // Get loader div
    var loader = document.getElementById('loader');

    // Add event listener for change event on select element
    bankSelect.addEventListener('change', function () {
        // Show loader
        loader.style.display = 'block';

        // Get selected option
        var selectedOption = bankSelect.options[bankSelect.selectedIndex];

        // Simulate a delay to mimic fetching data
        setTimeout(function () {
            // If selected option is not empty
            if (selectedOption.value !== '') {
                // Set bank name and USSD code in ussdDetails div
                ussdDetails.innerHTML = `
                    <h1 class="h-sub-title text-center ussd-bank-name ls-1 mb-0">${selectedOption.textContent}</h1>
                    <div class="py-1"></div>
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="h-sub-title text-center">Dial the code below on your mobile phone to complete the payment</h4>
                        </div>
                    </div>
                    <div class="py-2"></div>
                    <div class="py-2"></div>
                    <div class="ussd-code-container ls-1">
                        <h3 class="ussdFont">${selectedOption.value}</h3>
                    </div>
                    <div class="py-1"></div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="clipborad-container">
                                <h4 class="h-sub-title text-center cursor-pointer text-grey">Click to copy code</h4>
                                <div class="copy-action-wrapper" style="display: none;">
                                    <div class="react-reveal d-flex justify-content-center">
                                        <div class="copy-notify-banner">
                                            <span>Copied!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-2"></div>
                    <div class="py-2"></div>
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="h-title f-w-500 text-center cursor-pointer text-primary" style="font-size: 12px;">Select another bank</h4>
                        </div>
                    </div>
                    <hr class="ussd-hr">
                    <button class="sc-iGgWBj transfer-btn" style="padding: 10px 8px;">I’ve completed this payment</button>
                `;
                // Display ussdDetails div
                ussdDetails.style.display = 'block';
            } else {
                // If selected option is empty, hide ussdDetails div
                ussdDetails.style.display = 'none';
            }

            // Hide loader
            loader.style.display = 'none';
        }, 1000); // Simulate a delay of 1 second
    });
});
