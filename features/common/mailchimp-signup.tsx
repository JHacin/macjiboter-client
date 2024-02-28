import Script from "next/script";

export function MailchimpSignup() {
  return (
    <>
      <Script
        src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js"
        strategy="afterInteractive"
        data-dojo-config="usePlainJson: true, isDebug: false"
      />
      <Script id="mc-signup" strategy="lazyOnload">
        {`
          require(["mojo/signup-forms/Loader"], function(L) {
            L.start({
              "baseUrl": "mc.us5.list-manage.com",
              "uuid": "d07acd44f9838ec72a617ce1f",
              "lid": "b794a4e2e2"
            })
          })
        `}
      </Script>
    </>
  );
}
