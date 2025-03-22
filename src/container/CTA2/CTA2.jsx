import React from 'react';
import './CTA2.css';
import { images } from '../../constants';

const CTA2 = () => {
  return (
    <div className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>Plans Start at ₦5,000/month </h3>

<p className="pt-2 pb-4"></p>
<buton className="btn-positivus">See All Plans</buton>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
  )
}

export default CTA2