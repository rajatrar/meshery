import { NoSsr } from '@layer5/sistent';
import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MesheryPlayComponent from '../../components/MesheryPlayComponent';
import { updatepagepath } from '../../lib/store';

const Manage = () => {
  return (
    <NoSsr>
      <Head>
        <title>Management | Meshery </title>
      </Head>
      <MesheryPlayComponent />
    </NoSsr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { updatepagepath: bindActionCreators(updatepagepath, dispatch) };
};

export default connect(null, mapDispatchToProps)(withRouter(Manage));
