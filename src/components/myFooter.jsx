import './footer.css';
export default function MyFooter() {
    return(
        <>
            <div className="container-fluid bg-primary">
                <div className="row3">
                    <div className="col1">all rights resolved  <i class="fa-regular fa-copyright"></i></div>
                </div>
                <div className="row3">
                    <div className="col1">
                        <span className='footSpan'><b><i class="fa-brands fa-square-facebook"></i></b></span>
                        <span className='footSpan'><b><i class="fa-brands fa-square-whatsapp"></i></b></span>
                        <span className='footSpan'><b><i class="fa-brands fa-square-twitter"></i></b></span>
                        <span className='footSpan'><b><i class="fa-brands fa-telegram"></i></b></span>
                    </div>
                </div>
            </div>
        </>
    );
}