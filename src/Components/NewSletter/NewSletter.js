import React from 'react';
import './NewSletter.css'
const NewSletter = () => {
    return (
        <div className="block-newsletter">
            <div className="container block-newsletter__container">
                <h5 className="main-title main-title--light main-title--m-top-bottom">subscribe to our newsletter</h5>
                <div className="block-newsletter__form-block">
                    <form>
                        <input type="email" placeholder="Enter Your Email Address" className="field"/>
                            <button className="btn btn--wide btn--m-top-bottom" type="submit">Submit</button>

                    </form>
                    <a className="logo" href="#">
                        <b className="logo__bold">. one</b>Town
                    </a>
                </div>
            </div>
        </div>

    );
};

export default NewSletter;