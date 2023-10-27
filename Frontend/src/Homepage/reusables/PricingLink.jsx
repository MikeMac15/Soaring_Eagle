import styled from "styled-components"
import './priceBtn.css'

export default function PricingBtn({text}){

    return (
        <>
            <ul class="menu3">
                <li><span>{text}</span></li>
            </ul>
        </>
    )
}

