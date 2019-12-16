import React from 'react';
import './Main.css'
const Main = (props) => {
    return (
        <div className="container">
            <h3 className=" main-title main-title--margin-left">our works</h3>
            <div className="promo-block__boxes">
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-1.jpg')} alt="" />
                    <h4 className="promo-block__title">App UI Kit Pro</h4>
                </div>
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-2.jpg')} alt="" />
                    <h4 className="promo-block__title">vintage poster effects</h4>
                </div>
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-3.jpg')} alt="" />
                    <h4 className="promo-block__title">ecommerce line icons</h4>
                </div>
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-4.jpg')} alt=""/>
                    <h4 className="promo-block__title">iOS7 Icon Concepts</h4>
                </div>
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-5.jpg')} alt=""/>
                    <h4 className="promo-block__title">BlueBox: Flat PSD Template</h4>
                </div>
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-6.jpg')} alt=""/>
                    <h4 className="promo-block__title">iPhone App website</h4>
                </div>
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-7.jpg')} alt=""/>
                    <h4 className="promo-block__title">Leather UI Elements PSD</h4>
                </div>
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-8.jpg')} alt=""/>
                    <h4 className="promo-block__title">Coffee Cups PSD</h4>
                </div>
                <div className="promo-block__box">
                    <img className="promo-block__img" src={require('../../images/respy-portfolio-9.jpg')} alt=""/>
                    <h4 className="promo-block__title">14 Badges in 4 Styles</h4>
                </div>
            </div>
        </div>
    )
}
export default Main;