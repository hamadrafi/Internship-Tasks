        const form = document.getElementById('form');
        const errorMsg = document.getElementById('errorMsg');
        const popupText = document.getElementById('popupText');
        const popupClose = document.getElementById('popupClose');

        function showError(message) {
            popupText.textContent = message;
            errorMsg.style.display = 'flex';
        }
        function hideError() {
            popupText.textContent = '';
            errorMsg.style.display = 'none';
        }
        function formSubmit(message){
            popupText.textContent =message;
            errorMsg.style.display = 'flex';
        }
        
        errorMsg.addEventListener('click', (e) => {
            if (e.target === errorMsg) hideError();
        });
        popupClose.addEventListener('click', hideError);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        form.addEventListener('submit', function (e) {
            e.preventDefault(); 

            // read values fresh
            const nameVal = document.getElementById('full-name').value.trim();
            const emailVal = document.getElementById('email').value.trim();
            const subjectVal = document.getElementById('subject').value.trim();
            const messageVal = document.getElementById('message').value.trim();

            // clear previous popup
            hideError();

            
            if (!nameVal || !emailVal || !subjectVal || !messageVal) {
                showError('All fields are required.');
                return;
            }
            if (nameVal.length < 5) {
                showError('Name must have at least 5 characters.');
                return;
            }
            if (!emailPattern.test(emailVal)) {
                showError('Please enter a valid email address.');
                return;
            }
            if (subjectVal.length < 10) {
                showError('Subject must have at least 10 characters.');
                return;
            }
            if (messageVal.length < 20) {
                showError('Message must have at least 20 characters.');
                return;
            }
            if  (nameVal.length >=5 && emailPattern.test(emailVal) && subjectVal.length >=10 && messageVal.length >=20  ) {
               formSubmit("Your message has been sent successfully");
               return;
            }
            
            form.submit();
            
            
        });