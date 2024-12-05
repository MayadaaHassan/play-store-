
// creat servay










    // add servay
    document.addEventListener('DOMContentLoaded', function() {
        const surveys = JSON.parse(localStorage.getItem('surveys')) || [];
        console.log(surveys); // هذا السطر سيساعدك على رؤية بيانات الاستبيانات في وحدة التحكم

        const surveysList = document.getElementById('surveysList');

        if (surveys.length === 0) {
            surveysList.innerHTML = '<p class="text-center empty-message">No surveys created yet.</p>';
        } else {
            surveysList.innerHTML = ''; // تنظيف الرسالة السابقة
            surveys.forEach(survey => {
                const surveyCard = `
                    <div class="survey-card">
                        <h3>${survey.title}</h3>
                        <ul>
                            ${survey.questions.map(question => `<li>${question}</li>`).join('')}
                        </ul>
                    </div>`;
                surveysList.insertAdjacentHTML('beforeend', surveyCard);
            });
        }
    });

};