/*===================about tabs============== */
const tabs=document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]');

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);
        // console.log(target);

        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active')

        tabs.forEach((tab)=>{
            tab.classList.remove('tab__active');
        })

        tab.classList.add('tab__active');
    })

})


// ============contact form==========
const contactForm =document.getElementById('contact-form'),
contactname=document.getElementById('contact-name'),
contactCompny=document.getElementById('contact-company'),
contactEmail=document.getElementById('contact-email'),
contactsubject=document.getElementById('contact-subject'),
contactMessage=document.getElementById('contact-message')
errormessage=document.getElementById('error-message');

const sendemail =(e)=>{
    e.preventDefault();


    //check if the field has a value
    if(contactname.value===''||
        contactCompny.value===''||
        contactEmail.value===''||
        contactsubject.value===''||
        contactCompny.value===''||
        errormessage.value===''
    )
    {
        //show mesage
        errormessage.textContent='write all the input field'
    }
    else{
        emailjs.sendForm('service_mhjim9i','template_bvw0vgy','#contact-form','rUamfTzVOtCT1w_vu').then(()=>{
            //show message and add color,window+dot to open emoji
            errormessage.classList.add('color-first');
            errormessage.textContent='message sent';

            //remove message after 5 second
            setTimeout(()=>{
                errormessage.textContent='';
            },5000);
        },
        (error)=>{
            alert('oops! something went wrong...',error);
        }
    );
    //clear input fields

contactname.value='';
contactCompny.value='';
contactEmail.value='';
contactMessage.value='';
contactsubject.value='';


    }

};

contactForm.addEventListener('submit',sendemail);

