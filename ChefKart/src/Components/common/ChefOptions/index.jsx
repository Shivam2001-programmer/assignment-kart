import React from 'react';
import "./ChefOptions.css";

const tabs = [
  {
    id: 1,
    name: "ChefIt",
    backdrop: "#ff961f",
    active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
  },
  {
    id: 2,
    name: "Mughalai",
    backdrop: "#ff961f",
    active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
  }
]

const ChefOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="chef-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => {
          return (
            <div onClick={() => setActiveTab(tab.name)}
              className={`chef-item absolute-center cur-po ${activeTab === tab.name && "active-tab"}`}>
              <div className='chef-image-container absolute-center'
                style={{
                  backgroundColor: `${activeTab === tab.name ? tab.backdrop : ""}`
                }}>
                <img
                  className="chef-image"
                  src={activeTab === tab.name?tab.active_img:tab.inactive_img}
                  alt={tab.name} />

              </div>
              <div className="chef-name">{tab.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChefOptions;