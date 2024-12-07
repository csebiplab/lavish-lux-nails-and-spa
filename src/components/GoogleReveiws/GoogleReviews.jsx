"use client"

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

function GoogleReviews() {
  // Create a free Featurable account at https://featurable.com
  // Then create a new Featurable widget and copy the widget ID
  const featurableWidgetId = "dc98482a-fc7d-4895-973a-08fd34ea1f9e"; // You can use "example" for testing

  return (
    <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
  );
}

export default GoogleReviews;