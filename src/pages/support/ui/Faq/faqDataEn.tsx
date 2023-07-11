import TextLink from '@src/shared/ui/TextLink/TextLink';

const faqDataRu = [
  {
    label: 'Is Amnezia a VPN service?',
    content:
      "No Amnezia is not a VPN-service, it's a VPN-client with which you can set up and use your own VPN.",
  },
  {
    label: 'Is Amnezia a free service?',
    content:
      "Yes, Amnezia is completely free software. You don't connect to our servers and you don't pay anything to us. However, to create your own VPN, you will need to purchase any VPS from any provider or use an existing one.",
  },
  {
    label: 'Which devices and operating systems does Amnezia support?',
    content: 'Currently, there are versions available for Windows, macOS, Android, iOS, and Linux.',
  },
  {
    label: 'Does Amnezia collect user data?',
    content: (
      <>
        Amnezia does not collect or transmit any statistics, logs, analytics, or other user
        information. The only data requested by the client is connection data. This data is also not
        collected or transmitted, which can be verified due to the
        <TextLink
          to="https://github.com/amnezia-vpn"
          variant="light"
          text=" open-source "
          openInNewTab
        />
        of both the server and client software.
      </>
    ),
  },
  {
    label: 'How does Amnezia work?',
    content:
      'You provide the IP address, login, and password of your server. The application connects to the server via SSH, installs Docker, and launches Amnezia server containers. Separate containers are created for each connection protocol, and keys and root certificates are generated. Once the server is configured, you can connect to it via VPN.',
  },
  {
    label: 'Why Amnezia is more resistant to blocking than other VPNs?',
    content:
      'The larger and more popular a commercial VPN service is, the more likely it is to attract attention of the surveillance agencies and authorities, which increases the chances of access to its servers and protocols is being blocked. With Amnezia, you can create your own VPN based on any VPS for your personal use only. By using your own VPS in conjunction with encrypted VPN protocols, the chance of blocking is significantly reduced. This is confirmed by our users in countries with high levels of censorship.',
  },
  {
    label:
      'What are the advantages of Amnezia and other Self-hosted VPN services over regular VPN?',
    content: (
      <>
        <p>
          <strong>Full Control</strong> - you have full control over your own VPN server, including
          configuration, security, logging, and data access. You have the ability to choose the
          configuration, encryption protocols and security settings according to your requirements.
        </p>
        <p>
          <strong>High performance</strong> - self-hosted VPN can offer better speed and performance
          because you control the server resources and can customize it to your needs. This is
          especially useful if you have a large number of users or require high bandwidth.
        </p>
        <p>
          <strong>Bypass restrictions</strong> - many sites know the IP addresses of popular VPN
          servers and blacklist them. When you buy a separate VPS, your IP address is known only to
          you and the people you have shared your connection data with.
        </p>
        <p>
          <strong>Mobility</strong> - the ability to use your configured VPN not only with the
          Amnezia client but also with other self-hosted applications that support selected VPN
          protocols.
        </p>
      </>
    ),
  },
  {
    label: "I downloaded the app, what's next?",
    content: (
      <>
        Once you have downloaded the app, you need to enter your VPS details. You can use your
        existing VPS or buy a new one. As an example,
        <TextLink to="https://github.com/amnezia-vpn" variant="light" text=" here " openInNewTab />
        are the instructions for buying a VPS on several popular hostings.
      </>
    ),
  },
  {
    label: 'I want to buy a VPS, what options should I choose?',
    content:
      'Amnezia works with any KVM virtualization servers running Ubuntu (officially supported version is 20.04) and Debian 10.',
  },
  {
    label: 'Why do I need a server with KVM?',
    content:
      'Amnezia uses Docker to stand-alone your VPN server deployment. Not every type of virtualization can be used with Docker, but KVM definitely allows it. Other types of virtualization may not work with Docker, either due to the limitations of the specific virtualization type or due to configuration from the VPS vendor.',
  },
  {
    label: 'Which VPN protocol to choose?',
    content: (
      <>
        <p>
          <strong>IMPORTANT!</strong> If your country has a very high level of control, blocked
          access to many sites, do not use any commercial and free VPN and VPN protocols, we
          recommend using OpenVPN over Cloak from the first connection. If you use unmasked
          protocols, the ip of your VPS can be blocked.
        </p>
        <p>
          <strong>OpenVPN</strong>, over UDP, WireGuard and IKEv2 unmasked protocols over UDP are
          easily detected by firewalls and some sites. Sites may show a warning: "disable VPN before
          visiting site".
        </p>
        <p>
          To avoid this, use OpenVPN with TCP protocol, OpenVPN over ShadowSocks and OpenVPN over
          Cloak.
        </p>
        <p>In all other cases, the difference between the protocols is minimal.</p>
      </>
    ),
  },
  // {
  //   label: 'What is Kill Switch?',
  //   content: (
  //     <>
  //       <strong>Kill switch!</strong> — is an emergency internet disconnect feature integrated into
  //       the VPN app. In case of an unexpected disconnection of your VPN-connection, the
  //       <strong> kill switch </strong>feature will automatically disconnect you from the Internet.
  //     </>
  //   ),
  // },
  {
    label: 'I want to use a VPN, but not for all sites. What are the options?',
    content:
      'Amnezia has a feature that allows to add sites-exclusions to the list in order to visit them from your IP address, it is available on the main screen of the client when it is connected.',
  },
  {
    label: 'Can I use key authentication for Amnezia?',
    content:
      'It is possible, authorization is supported both by password and by keys. Supported OpenSSH key types: RSA (2048, 3072, 4096) and ECDSA (nistp256)',
  },
  {
    label: 'Can I share my connection with other people?',
    content:
      'Yes, you can share connection data with anyone you trust. Use one VPS for an unlimited number of users.',
  },
  {
    label: 'Purpose of the "Clear client cached profile" feature.',
    content:
      'By default, Amnezia caches data (certificates and keys) from a configured VPN server to quickly connect directly to the server. This button resets this cache, as a result, new certificates with keys will be generated, which will be placed on the server via an SSH connection, and only then the connection will start. It must be used when changing the server (if installed on several VPS), when updating the client or server. May be required when changing container settings.',
  },
  {
    label: 'Amnezia throws an error. What to do?',
    content: (
      <>
        <p>
          Contact the developers by
          <TextLink
            text=" support@amnezia.org"
            to="mailto:support@amnezia.org"
            variant="light"
          />{' '}
          or in the <TextLink text="Telegram" to="https://t.me/amnezia_vpn" variant="light" /> chat
          and provide the logs of the program.
        </p>
        <p>You can get the logs in the following ways:</p>
        <strong>On Windows:</strong>
        <ul>
          <li>C:\Users\%USERNAME%\AppData\Roaming\AmneziaVPN.ORG\AmneziaVPN\log</li>
          <li>C:\ProgramData\AmneziaVPN\log</li>
        </ul>
        <br />
        <strong>On MacOS:</strong>
        <ul>
          <li>/$HOME/Library/Application\ Support/AmneziaVPN.ORG/AmneziaVPN/</li>
          <li>/var/log/AmneziaVPN/AmneziaVPN-service.log</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Can I use my new VPN on other apps?',
    content:
      'Yes. If you have connected at least once through Amnezia, then Amnezia has configured a VPN for you and you can connect to your VPN through other applications.',
  },
  {
    label: "Why can't you use VPS from public sources?",
    content:
      'Connection data may have been made public for the purpose of intercepting your traffic and personal data. For a secure connection, we advise you to use a VPS purchased from a trusted VPS provider, or data that was transferred to you by a person you trust.',
  },
];

export default faqDataRu;
