import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiAllForOne, GiArtificialIntelligence, GiCartwheel, GiCrystalBars, GiDeliveryDrone, GiNewBorn, GiShoppingBag, GiShoppingCart } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing(props) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>{props.heading}</PricingHeading>
          <PricingContainer>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiShoppingBag />
                </PricingCardIcon>
                <PricingCardPlan>All Categories</PricingCardPlan>
                <PricingCardCost>6+</PricingCardCost>
                <PricingCardLength>categories</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100+ New Users Everyday</PricingCardFeature>
                  <PricingCardFeature>Best Store in Sri Lanka</PricingCardFeature>
                  <PricingCardFeature>Trending Items</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Out</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiNewBorn />
                </PricingCardIcon>
                <PricingCardPlan>New Arrivals</PricingCardPlan>
                <PricingCardCost>150+</PricingCardCost>
                <PricingCardLength>arrivals per day</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Trending shop in the country</PricingCardFeature>
                  <PricingCardFeature>Premium Shopping</PricingCardFeature>
                  <PricingCardFeature>Buy and Feel It</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Out</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Most Ordered Items</PricingCardPlan>
                <PricingCardCost>500+</PricingCardCost>
                <PricingCardLength>orders per day</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>You will experience the difference</PricingCardFeature>
                  <PricingCardFeature>Best Prices for Best Products</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Out</Button>
              </PricingCardInfo>
            </PricingCard>
            
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
