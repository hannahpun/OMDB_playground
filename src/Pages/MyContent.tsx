import React, { useEffect } from "react";
import Lists from "../Components/Lists/Lists";

import { connect } from "react-redux";

const Content = (props: any) => {
  useEffect(() => {
    console.log(props.favLists);
  }, []);

  return (
    <>
      <Lists lists={Object.values(props.favLists)} />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    favLists: state.favLists,
  };
};

export default connect(mapStateToProps, null)(Content);
