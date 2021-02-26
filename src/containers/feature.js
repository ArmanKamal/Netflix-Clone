import React from "react";
import { Feature, OptForm } from "../components";

export function FeatureContainer() {
  return (
    <Feature>
      <Feature.Title>Unlimited flims, TV programmes and more.</Feature.Title>
      <Feature.SubTitle>Watch Anywhere. Cancel at any time. </Feature.SubTitle>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
      </OptForm>
    </Feature>
  );
}
