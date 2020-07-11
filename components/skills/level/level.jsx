import * as React from 'react';

export const Level = ({level}) => {
  return (
    <div className="level">
           <style jsx>{`
              .level {
  
                background: linear-gradient(0deg, 
                rgb(174, 169, 245) 50%,
                rgba(136, 134, 162, .2) 50%);
                position: relative;
              }

              .level,
                .level::before,
                .level::after {
                  width: 10rem;
                  height: 10rem;
                  border-radius: 50%;
                }

                .level::before,
                .level::after {
                  position: absolute;
                  top: 0;
                  left: 0;
                  content: "";
                }

                .level::before {
                  background: rgb(255, 226, 226) content-box;
                  
                  padding: .25em;
                  box-sizing: border-box;
                  z-index: 100;
                  }

                .level::after {
                  background: linear-gradient(0deg, 
                  rgb(174, 169, 245) 50%,
                  transparent 50%);
                  transform: rotate(calc((${level}/100 * 180)*1deg));
                }

          `}</style>
    </div>
  )
}