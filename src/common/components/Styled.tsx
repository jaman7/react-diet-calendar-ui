import styled from 'styled-components';

export const SlideShow = styled.div`
  display: block;
  margin: 0 auto;
  overflow: hidden;
  max-width: 180px;
`;

export const SlideShowSlider = styled.div<{
  transform?: string;
}>`
  white-space: nowrap;
  transition: ease 1000ms;
  transform: ${props => props?.transform};
`;

export const Slide = styled.div`
  display: inline-flex;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

export const SlideItemData = styled.span`
  margin-bottom: 0;
  color: #ff801a;
  font-size: 40px;
  line-height: 40px;
  padding: 0 3rem;
`;

export const DataSlide = styled.div`
  display: inline-block;
  width: 100% !important;
`;

export const SlideItemDiv = styled.div`
  display: block;
`;

export const FigcaptionRecipes = styled.figcaption<{
  bgcolor?: string;
}>`
  background-color: ${props => props.bgcolor};
`;

// ====

export const StyledSliderWrap = styled.div<{
  setwidth?: number;
}>`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  margin: 0 auto;
  max-width: ${props => props.setwidth}px;
`;

export const StyledSliderContent = styled.div<{
  transition?: number;
  translate?: number;
  setwidth?: number;
}>`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.setwidth}px;
  display: flex;
`;

export const StyledSlide = styled.div<{
  setwidth?: number;
}>`
  height: 40px;
  width: ${props => props.setwidth}px;
`;
