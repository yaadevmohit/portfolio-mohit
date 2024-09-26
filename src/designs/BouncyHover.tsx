import "./styles/bouncy-hover.css"
import { IonIcon } from '@ionic/react';
import { arrowForwardOutline} from 'ionicons/icons';
import gsap from 'gsap';
import { useEffect, useRef } from "react";

const BouncyHover = () => {
    const pinkRef = useRef<HTMLDivElement | null >(null);
    const linkRef = useRef<HTMLAnchorElement | null >(null);
  
    useEffect(() => {
        const pinkElement = pinkRef.current;
        const linkElement = linkRef.current;

        if(pinkElement && linkElement) {
            const hoverTL = gsap.timeline({paused: true});

            hoverTL.to(pinkElement, {
                width: "calc(100% + 1.3em)",
                ease: "Elastic.easeOut(0.25)",
                duration: 0.5
            });
            hoverTL.to(pinkElement, {
                width: "1.8em",
                left: "calc(100% - 1.4em)",
                ease: "Elastic.easeOut(0.25)",
                duration: 0.5,
            });

            const handleMouseEnter = () => hoverTL.play();
            const handleMouseLeave = () => hoverTL.reverse(); 
            
            linkElement.addEventListener("mouseenter", handleMouseEnter);
            linkElement.addEventListener("mouseleave", handleMouseLeave);
            
            return () => {
                linkElement?.removeEventListener("mouseenter", handleMouseEnter);
                linkElement.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    });
  return (
    <div className="wrapper">
            <a className="link" ref={linkRef}>
                <div className="pink" ref={pinkRef}></div>
                <span>Hover here</span>
                <IonIcon icon={arrowForwardOutline} className="icon-arrow"/>
            </a>
    </div>
  )
}

export default BouncyHover