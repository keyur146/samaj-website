import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();

const Card = () => {
  return (
    <>
    <div className='container py-5'>
        <h1 className='text-center'>હોદ્દેદારશ્રીઓ અને ટ્રસ્ટીશ્રીઓની યાદી વર્ષ – ૨૦૨૨-૨૩</h1>
    </div>
    <div className=''>
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='rameshbhai-somabhai-chauhan.jpg' alt='' />
                <h4 className='text-center'>શ્રી રમેશભાઈ સોમાભાઈ ચૌહાણ</h4>
                <p>પ્રમુખશ્રી</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='mahendrabhai-kantilal-chauhan (2).jpg' alt='' />
                <h4 className='text-center'>શ્રી મહેન્દ્રાભાઈ કાંતીલાલ ચૌહાણ</h4>
                <p>મંત્રીશ્રી</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='sureshbhai.jpg' alt='' />
                <h4 className='text-center'>શ્રી સુરેશભાઈ મફતલાલ ચૌહાણ</h4>
                <p>ખજાનચીશ્રી</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='mukundbhai-chauhan.jpg' alt='' />
                <h4 className='text-center'>શ્રી મુકુંદભાઈ વિઠ્ઠલદાસ ચૌહાણ</h4>
                <p>ઉપપ્રમુખશ્રી</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='ramanlal-chauhan.jpg' alt='' />
                <h4 className='text-center'>શ્રી રમણભાઈ સોમાલાલ ચૌહાણ</h4>
                <p>સહમંત્રી</p>
            </div>
            <div className='col-lg-1'></div>
        </div>
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='rameshbhai-somabhai-chauhan.jpg' alt='' />
                <h4 className='text-center'>શ્રી   </h4>
                <p>પ્રમુખશ્રી</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='mahendrabhai-kantilal-chauhan (2).jpg' alt='' />
                <h4 className='text-center'>શ્રી મહેન્દ્રાભાઈ કાંતીલાલ ચૌહાણ</h4>
                <p>મંત્રીશ્રી</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='sureshbhai.jpg' alt='' />
                <h4 className='text-center'>શ્રી સુરેશભાઈ મફતલાલ ચૌહાણ</h4>
                <p>ખજાનચીશ્રી</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='mukundbhai-chauhan.jpg' alt='' />
                <h4 className='text-center'>શ્રી મુકુંદભાઈ વિઠ્ઠલદાસ ચૌહાણ</h4>
                <p>ઉપપ્રમુખશ્રી</p>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='ramanlal-chauhan.jpg' alt='' />
                <h4 className='text-center'>શ્રી રમણભાઈ સોમાલાલ ચૌહાણ</h4>
                <p>સહમંત્રી</p>
            </div>
            <div className='col-lg-1'></div>
        </div>
        <div className='row'>
            <div className='col-lg-5'></div>
            <div className='col-lg-2 col-md-4 col-sm-6 box '>
                <img src='rameshbhai-somabhai-chauhan.jpg' alt='' />
                <h4 className='text-center'>શ્રી રમેશભાઈ સોમાભાઈ ચૌહાણ</h4>
                <p>પ્રમુખશ્રી</p>
            </div>
            <div className='col-lg-5'></div>
        </div>
    </div>
    <div className='container text-center pb-4'>
        <button className='btn' 
        // onClick={ () => navigate("")}
        >
        See More</button>
    </div>
    </>
  )
}

export default Card;