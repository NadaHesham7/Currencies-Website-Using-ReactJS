import { useState } from 'react';

function BreakSection() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    function fillingEmailInput(event) {
        const theEmail = event.target.value
        setEmail(theEmail)
        // console.log(email)
    }
    function subscribing() {
        if (email !== '') {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                console.log('worked')
                console.log('done')
                setSubscribed(true)
            } else {
                setInvalidEmail(true)

            }

        } else {
            setInvalidEmail(true)
        }

    }


    return (
        <>

            <section id='Subscribe' >
                <div className='container'>
                    <div className='row'>

                        <div className='col-2'> </div>

                        <div className='col-8 container' >
                            <div className='row p-5'>


                                <div className='col-6 text-center mb-n5 d-none d-md-block'>
                                    <img class="img-fluid "
                                        src="https://img.freepik.com/free-vector/chatbot-artificial-intelligence-abstract-concept-illustration_335657-3723.jpg?w=740&t=st=1673052619~exp=1673053219~hmac=2bb54c9742262bce0dd5b7e22cf74f01279261efae81cec7d8fa3317eb8cf561" />
                                </div>

                                {!subscribed && <div className='col-6 '>
                                    <h1 class="">Subscribe to our  Newsletter!</h1>
                                    <h5 className='mb-5'> Diam elitr est dolore at sanctus nonumy.</h5>
                                    <input type="text" class="form-control input-style" placeholder="Enter your Email" aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        value={email}
                                        onChange={fillingEmailInput} />
                                    {invalidEmail && <div className='pt-1 invalidEmail'> Invalid Email, Please enter a valid Email. </div>}

                                    <button type="button" class="border rounded mt-3 mb-5 break-section-button" onClick={subscribing}> <h5>Subscribe  </h5></button>
                                </div>}


                                {subscribed &&

                                    <div className='col-6 position-relative '>
                                        <div className='position-absolute top-50 start-50 translate-middle'>
                                            <h1 className='thank-you'> Thank you for Subscribing! </h1>
                                            <h5 className=''> You will be getting Emails whenever a currency exchange rate changes. </h5>
                                        </div>

                                    </div>}
                            </div>
                        </div>

                        <div className='col-2'>   </div>

                    </div>   </div>
            </section>
        </>
    )
}
export default BreakSection 