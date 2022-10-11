import React from "react";

const Table = ({handleTooltipShow}) => {

  return (
    <>
      <table>
        <tbody>
          {/* for first two row empty spaces ----------*/}
          {/* row 1 */}
          <tr>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
          </tr>
          {/*----------*/}

          {/* three rows for enquery ----------*/}
          {/* row 3 */}
          <tr>
            <td rowSpan="3" style={{ color: "#EA5545" }}>
              Enquery
            </td>
            <td
              colSpan="5"
              style={{ backgroundColor: "#EA5545", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter1"
              onMouseOver={()=>handleTooltipShow("tooltip-1",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-1",false)}
            >
              conceptualize
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 4 */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td
              colSpan="6"
              style={{ backgroundColor: "#EA5545", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter2"
              onMouseOver={()=>handleTooltipShow("tooltip-2",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-2",false)}
            >
              sketch
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 5 */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td
              colSpan="4"
              style={{ backgroundColor: "#EA5545", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter3"
              onMouseOver={()=>handleTooltipShow("tooltip-3",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-3",false)}
            >
              color profiles
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* ---------- */}

          {/* two rows for booking ----------*/}
          {/* row 6 */}
          <tr>
            <td rowSpan="2" style={{ color: "#EC752F" }}>
              Booking
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td
              colSpan="5"
              style={{ backgroundColor: "#EC752F", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter4"
              onMouseOver={()=>handleTooltipShow("tooltip-4",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-4",false)}
            >
              HTML
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 7 */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td
              colSpan="4"
              style={{ backgroundColor: "#EC752F", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter5"
              onMouseOver={()=>handleTooltipShow("tooltip-5",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-5",false)}
            >
              write the JS
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* ----------*/}

          {/* two rows for retail ----------*/}
          {/* row 8 */}
          <tr>
            <td rowSpan="2" style={{ color: "#E4941A" }}>
              Retail
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td
              colSpan="4"
              style={{ backgroundColor: "#E4941A", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter6"
              onMouseOver={()=>handleTooltipShow("tooltip-6",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-6",false)}
            >
              advertise
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 9 */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td
              colSpan="3"
              style={{ backgroundColor: "#E4941A", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter7"
              onMouseOver={()=>handleTooltipShow("tooltip-7",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-7",false)}
            >
              spam links
            </td>
            <td></td>
            <td></td>
          </tr>
          {/* ----------*/}

          {/* two rows for delivery ----------*/}
          {/* row 10 */}
          <tr>
            <td rowSpan="2" style={{ color: "#D5B316" }}>
              Delivery
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td
              colSpan="6"
              style={{ backgroundColor: "#D5B316", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter8"
              onMouseOver={()=>handleTooltipShow("tooltip-8",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-8",false)}
            >
              eat
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 11 */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td
              colSpan="4"
              style={{ backgroundColor: "#D5B316", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#exampleModalCenter9"
              onMouseOver={()=>handleTooltipShow("tooltip-9",true)}
              onMouseLeave={()=>handleTooltipShow("tooltip-9",false)}
            >
              Delivery Task
            </td>
          </tr>
          {/* ----------*/}

          {/* two row for empty spaces ----------*/}
          {/* row 12 */}
          <tr>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
          </tr>
          {/* row 13 */}
          <tr>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
            <td className="none"></td>
          </tr>
          {/* ----------*/}

          {/* last row for dates ----------*/}
          {/* last row */}
          <tr>
            <td className="none"></td>
            <td className="none">28 Jan</td>
            <td className="none">29 Jan</td>
            <td className="none">30 Jan</td>
            <td className="none">31 Jan</td>
            <td className="none">1 Feb</td>
            <td className="none">2 Feb</td>
            <td className="none">3 Feb</td>
            <td className="none">4 Feb</td>
            <td className="none">5 Feb</td>
            <td className="none">6 Feb</td>
            <td className="none">7 Feb</td>
            <td className="none">8 Feb</td>
            <td className="none">9 Feb</td>
            <td className="none">10 Feb</td>
            <td className="none">11 Feb</td>
            <td className="none">12 Feb</td>
            <td className="none">13 Feb</td>
            <td className="none">14 Feb</td>
            <td className="none">15 Feb</td>
            <td className="none">16 Feb</td>
          </tr>
          {/* ----------*/}
        </tbody>
      </table>
    </>
  );
};

export default Table;
