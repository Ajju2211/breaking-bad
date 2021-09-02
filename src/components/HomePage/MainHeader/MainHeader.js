import React from "react";
import "./styles.css";

function MainHeader() {
  return (
    <div className="row mainHeader m-0 p-0">
      <div className="col-12 col-md-3 row m-0 p-0 headerLeftBox">
        {/* headerLeftTitle */}
        <div className="col align-self-center p-4">
          <h1 className="headerLeftTitle">Breaking Bad</h1>
          <div className="titleSubInfo pt-4">
            <span>2008 &ensp; | &ensp;</span>
            <span className="eighteenPlus">&ensp; 18+ &ensp; </span>
            <span>&ensp; | &ensp; 5 Seasons &ensp; | </span>
            <span>&ensp; TV Thrillers &ensp; </span>
          </div>
          <div className="titleDesc">
            <p className="col">
              A terminally ill chemistry teacher teams with a former student to
              manufacture crystal meth to secure his family's future.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-9 m-0 p-0 headerRightBox">
        {/* Image Map Generated by http://www.image-map.net/ */}
      <img 
          className="img-fluid"
          width="1040"
          height="780"
          src="/images/wp_png2.jpeg"
          usemap="#image-map"/>

      <map name="image-map">
          <area target="_blank" alt="Walter White" title="Walter White" href="https://br-b.netlify.app/character/1" coords="627,57,478,55,333,794,809,768,680,64,665,56" shape="poly"/>
          <area target="_blank" alt="Jesse Pinkman" title="Jesse Pinkman" href="https://br-b.netlify.app/character/2" coords="262,166,367,161,242,710,270,791,283,882,314,870,385,238,368,162,314,395,243,708,389,330,314,396,243,711,275,315" shape="poly"/>
          <area target="_blank" alt="Skyler White" title="Skyler White" href="https://br-b.netlify.app/character/3" coords="1080,202,1176,200,1273,1001,1063,976,1016,502,1011,472,1033,343" shape="poly"/>
      </map>
      {/* <img
          className="img-fluid"
          width="1040"
          height="780"
          src="/images/wp_png2.jpeg"
        /> */}
      </div>
    </div>
  );
}

export default MainHeader;
