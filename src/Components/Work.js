import React from 'react'
import PickMeals from "../Assets/home-banner-image.png"
import ChooseMeals from "../Assets/home-banner-image.png"
import DeliveryMeals from "../Assets/home-banner-image.png"

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Choose a Tree",
            text: "Lorem ipsum dolor sit anet consectetur. Maecanas orci et sagittis duis elementum interdum facilisi bidendum.",
        },
        {
            image: ChooseMeals,
            title: "Choose a Tree",
            text: "Lorem ipsum dolor sit anet consectetur. Maecanas orci et",
        },
        {
            image: DeliveryMeals,
            title: "Choose a Tree",
            text: "Lorem ipsum dolor sit anet consectetur. Maecanas orci et sagittis duis elementum",
        },
    ]
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">Lorem ipsum dolor sit anet consectetur. Maecanas orci et sagittis duis elementum</p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work