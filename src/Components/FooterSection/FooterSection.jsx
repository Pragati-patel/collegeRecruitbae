import React from 'react';
import style from './Footer.module.css';
import TwitterIcon from 'Assets/svg/twitter.svg';
import LinkedInIcon from 'Assets/svg/linkedin.svg';
import LNavLogo from 'Assets/svg/sourcebaeLogo.svg';

function FooterSection() {

    const linkedin = () => {
        window.open(
            'https://www.linkedin.com/company/sourcebae/about/',
            '_blank'
        );
    };
    const twitter = () => {
        window.open('https://twitter.com/Shethink_in', '_blank');
    };

    return (
        <div className={style.MainContainer}>


            <div className={style.TextInfoContainer}>
                <div className={style.IconContainer}>
                    <div className={style.HeadingContainer}>
                        <span>
                            <img
                                className={`${style.Cursor} md:w-1/5 w-3/5 relative -left-8`}
                                onClick={() => {
                                }}
                                src={LNavLogo}
                            />
                        </span>
                    </div>
                    <div className={style.Twitter}>
                        <img
                            className={style.Cursor}
                            onClick={linkedin}
                            src={TwitterIcon}
                        />
                        <img
                            className={style.Cursor}
                            onClick={twitter}
                            src={LinkedInIcon}
                        />
                    </div>
                    <div>
                    </div>
                </div>
                <div className={style.Address}>
                    <div className={style.Heading}>Address</div>
                    <div className={style.SubHeading}>
                        Plot no. 205, Vijay Nagar, Part II, Scheme Number 136,
                        Indore,
                        <br /> Madhya Pradesh 452010
                    </div>
                </div>

                <div className={style.Contact}>
                    <div className={style.Heading}>Contact</div>
                    <div className={style.SubHeading}>
                        For any enquiry contact us at <br /> info@sourcebae.com
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
