import { useState, useEffect } from "react";
import SpinningCard from "./SpinningCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PricingBtn from "../reusables/PricingLink";
import ServicesTitle from "./ServicesTitle";

const CardGroup = styled.div`
background-image: url('/cardPictures/patternEducation2.png');
background-size: 100% 100%;

padding-top: 2rem;

`;
const WWG = styled.div`
    height: 100px;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    padding:3rem 0;
    margin-bottom: 1rem;

    
`
const WhatWeGot = styled.h2`

height: 4rem;
font-size: 3rem;
position: relative;
/* text-transform: uppercase; */

box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;


padding: 10px 40px;
color: #0f2027;
display: flex;
align-items: center;
justify-content: center;

span {
        font-family: 'Handlee', cursive;
        // transform: ;
        transform: translateY(-20px) scale(.25);
        opacity: 0;
        color: #111;
        // width:10%;
        height:110%;
        overflow: hidden;
        // word-wrap: break-word;
        text-overflow: ellipsis;
        transition:  3s ease 1s;

      }

    &::before,
    ::after {
        content: "";
        position: absolute;
        display: block; 
    }

    &:before {
        height: 100%;
        width: 0;
        right: 0;
        border-top: 2px solid #ffc861;
        border-bottom: 2px solid #ffc861;
        transition: all 2s cubic-bezier(0.75, 0.81, 0.4, 1);
      }

    &:after {
        
        height: calc(100% - 4px);
        width: 0%;
        left: 0;
        transition: all 2s cubic-bezier(0.75, 0.81, 0.4, 1);
      }
      

    &.visible:before,
    &.visible:after
    {
      width: 100%;
      background:#ffdfb5c1;

      
    }
    &.visible span {
        transform: translateX(0px);
        opacity: 1;
        color: #111;
        
        width:110%;
      }
    &.visible:after
    {
        width: 100%;
        
    }

    @media (max-width: 651px){
      font-size: 2rem;
      height: 3.5rem;
  }
  @media (max-width: 451px){
    font-size: 1.5rem;
    height: 2.7rem;
}
@media (max-width: 361px){
  font-size: 1.25rem;
  height: 2.7rem;
}

`

const PricingLink = styled(Link)`
margin:2rem;
font-size: 2rem;
text-decoration: none;
color: black;


`

const Cards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 1800;
      
      if (scrollPosition >= triggerPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    return (
          <>
        
            <CardGroup>
              <WWG>
                <WhatWeGot className={isVisible ? 'visible' : 'invisible'}><span>Services We Have To Offer.</span></WhatWeGot>
              </WWG>

             

              <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlay={true}
                  autoPlaySpeed={4000}
                  centerMode={true}
                  className=""
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={true}
                  infinite={true}
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover={true}
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024
                      },
                      items: 3,
                      partialVisibilityGutter: 40
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0
                      },
                      items: 1,
                      partialVisibilityGutter: 30
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464
                      },
                      items: 2,
                      partialVisibilityGutter: 30
                    }
                  }}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={true}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                  >

                  <SpinningCard
                      frontImage='/cardPictures/mtutor.jpeg'
                      frontTitle='Individualized instruction driven by a unique, adaptable three-step plan based on student needs.'
                      backContent="
                      Assess the student thoroughly to see where the student is lacking in their academics. 
                      Create an individualized academic plan that will be adaptable to their progress. 
                      One-on-One instruction at the students' skill level and pace. Students will meet with staff until they reassess at grade level."
                      />

                  <SpinningCard
                      frontImage='/cardPictures/hands.jpg'
                      frontTitle="Tutoring based on the students' immediate needs in their current classes."
                      backContent="Some students may just need help with the schoolwork that they are currently working on in school. Most rural schools have very few, if any, tutoring programs in the school. Although there are online resources, many students that are already struggling have a hard time learning without in-person help."
                      />
                  
                  <SpinningCard
                      frontImage='/cardPictures/grad.jpeg'
                      frontTitle="Credit retrieval for high school students."
                      backContent="Many high school students have found themselves shy of credits for graduation by their Senior year. Soaring Eagle Educational Center will team with an accredited organization to help students make up their credits at their pace."
                      /> 
                  
                  <SpinningCard
                      frontImage='/cardPictures/Homeschooling.jpeg'
                      frontTitle="Assist with students that are home schooling."
                      backContent="The staff will also be able to assist families that are continuing to home school since the pandemic."
                      />
                  
                  <SpinningCard
                      frontImage='/cardPictures/study.jpeg'
                      frontTitle="Study skills training."
                      backContent="Students may need help getting organized, using their time wisely and learning how to study more effectively. We will offer workshops that families can tap into with ongoing support to make sure their student is successful."
                      />

                  <SpinningCard
                      frontImage='/cardPictures/math.jpeg'
                      frontTitle="Summer Math Bridges class."
                      backContent="We will be offering summer math courses for students to maintain their math skills over the summer and get a preview of what to expect in their upcoming math classes."
                      />

                  
                  <SpinningCard
                      frontImage='/cardPictures/just_ahead.jpeg'
                      frontTitle="Other workshops."
                      backContent="We will also have workshops for families that need help with FAFSA, college applications and essay writing."
                      />

                    
              </Carousel>
              <PricingBtn text='Click Here For Pricing Info'/>
            </CardGroup>
       
          </>
       
       )
    };
    
    export default Cards;