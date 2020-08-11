import React from "react";
import { GLOBAL_CLASS_NAMES } from "./css-vars";
import { FooterWrapper, FooterItem } from "./footer-parts";
import PrivacySvg from "img/privacy.svg";
import TermOfUseSvg from "img/termofuse.svg";
import { TOOLTIP_LABELS } from "./css-vars";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  return (
    <FooterWrapper className={GLOBAL_CLASS_NAMES.FOOTER}>
      <FooterItem
        label="Privacy Policy"
        icon={<PrivacySvg />}
        ariaLabel={TOOLTIP_LABELS.PRIVACY_POLICY}
        onClick={() => null}
      />
      <FooterItem
        label="Term of Use"
        icon={<TermOfUseSvg />}
        ariaLabel={TOOLTIP_LABELS.TERM_OF_USE}
        onClick={() => null}
      />
    </FooterWrapper>
  );
}
