import React from "react";
import Image from "next/image";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { tours } from "@/data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, image, date, title, text, location, days, price } =
              tour;
            return (
              <article className="tour-card">
                <div className="tour-img-container">
                  <Image
                    src={image}
                    className="tour-img"
                    alt={title}
                    width={800}
                    height={450}
                  />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faMap}/>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{days} Days</p>
                    <p>From ${price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
