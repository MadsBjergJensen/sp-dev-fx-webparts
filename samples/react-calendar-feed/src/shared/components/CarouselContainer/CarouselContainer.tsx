import { css } from "@uifabric/utilities/lib/css";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";
import Slider from "react-slick";
import { ICarouselContainerProps, ICarouselContainerState } from ".";
import styles from "./CarouselContainer.module.scss";

/**
 * Carousel container
 * Presents the child compoments as a slick slide
 */
export class CarouselContainer extends React.Component<ICarouselContainerProps, ICarouselContainerState> {
    // the slick slider used in normal views
    private _slider: Slider;

    /**
     * Renders a slick switch, a slide for each child, and next/previous arrows
     */
    public render(): React.ReactElement<ICarouselContainerProps> {
        var settings: any = {
            accessibility: true,
            arrows: false,
            autoplaySpeed: 5000,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 500,
            centerPadding: "50px",
            pauseOnHover: true,
            variableWidth: false,
            useCSS: true,
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
              },
            ]
        };

        return (
            <div className={css(styles.carouselContainer, styles.filmStrip)}>
                <Slider ref={c => (this._slider = c)}
                    {...settings}>
                    {this.props.children}
                </Slider>
                <div
                    className={css(styles.indexButtonContainer, styles.sliderButtons)}
                    style={{ "left": "10px" }}
                    onClick={() => this._slider.slickPrev()}
                >
                    <IconButton className={css(styles.indexButton, styles.leftPositioned)}
                        iconProps={{ iconName: "ChevronLeft" }}
                    />
                </div>
                <div
                    className={css(styles.indexButtonContainer, styles.sliderButtons)}
                    style={{ "right": "10px" }}
                    onClick={() => this._slider.slickNext()}
                >
                    <IconButton className={css(styles.indexButton, styles.rightPositioned)}
                        iconProps={{ iconName: "ChevronRight" }}
                    />
                </div>
            </div>
        );
    }
}