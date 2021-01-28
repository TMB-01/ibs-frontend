import styled from "styled-components";

export const TeamSection = styled.div`
  padding: 0;
`;

export const TeamInner = styled.div`
  padding: 10px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamBack = styled.div`
  left: -35px;
  right: -35px;
  height: 100%;
  border-radius: 18px;
  content: "";
  z-index: -1;
  .card-container {
    transform-style: preserve-3d;
    box-sizing: border-box;
  }
  .card-container .flipped {
    .front {
        transform: rotateY(180deg);
    }
    .back {
        transform: rotateY(0deg);
    }
}

  @media screen and (max-width: 500px) {
    margin: 0;
    width: 99vw;
  }
`;

export const TeamHeader = styled.div`
  position: relative;
  margin: 10px 0 65px;
  text-align: center;
  margin-bottom: -40px;
`;

export const TeamSwipeContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  position: relative;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

export const SwipeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
`;

export const ItemName = styled.div`
  font-weight: 700;
  margin: 0 0 10px;
`;

export const ItemNameDesc = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const TeamAllMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1040px) {
    flex-wrap: wrap;
  } ;
`;

export const TeamMember = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffbf2b;
  border-radius: 14px;
  margin: 20px;
`;

export const TeamMemberImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f3f1ee;
  border-radius: 50%;
  margin: 10px;
  position: relative;
`;

export const TeamMemberAvatar = styled.img`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 75px;
  height: 75px;
`;

export const TeamMemberName = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 5px;
  text-align: center;
`;

export const TeamMemberDesc = styled.p`
  font-size: 16px;
  text-align: center;
`;


export const Container = styled.div`
  position: relative;
  width: 1170px;
  min-width: 320px;
  padding: 0 40px;
  margin: 0 auto;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0 20px;
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
  } ;
`;

export const Heading = styled.h3`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  color: #000;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 479px) {
    margin: 0 0 5px;
  }
  @media screen and (max-width: 575px) {
    font-size: 28px;
  } ;
`;

export const HeadingDesc = styled.div`
  max-width: 540px;
  margin: 10px auto;
  padding-top: 10px;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
`;