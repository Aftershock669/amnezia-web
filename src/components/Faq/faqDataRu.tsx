import TextLink from '@src/shared/ui/TextLink/TextLink';

const faqDataRu = [
  {
    label: 'Amnezia это VPN сервис?',
    content:
      'Нет Amnezia это не VPN-сервис, это VPN- клиент с помощью которого вы сможете настроить свой VPN-сервис и пользоваться им.',
  },
  {
    label: 'Амнезия бесплатная?',
    content:
      'Да, Амнезия абсолютно бесплатное ПО. Однако для создания собственного VPN нужно приобрести любой VPS любого провайдера.',
  },
  {
    label: 'На каких устройствах с какими операционными системами работает Amnezia?',
    content: 'Есть версии для Windows, MacOS, Android, iOS, и Linux.',
  },
  {
    label: 'Amnezia собирает данные пользователей?',
    content: (
      <>
        Amnezia не собирает и не передаёт никакой статистики, логов, аналитики и любой другой
        информации о пользователях. Единственные данные которые запрашивает клиент это данные
        подключения, которые также не собираются и не передаются, что можно проверить благодаря{' '}
        <TextLink
          to="https://github.com/amnezia-vpn"
          variant="light"
          text="открытому исходному коду"
          openInNewTab
        />{' '}
        серверной и клиентской части ПО.
      </>
    ),
  },
  {
    label: 'Как работает Amnezia?',
    content:
      'Вы указываете IP-адрес, логин и пароль вашего сервера. Приложение подключается к серверу по SSH, устанавливает Docker и запускает серверные контейнеры Amnezia. Для каждого протокола подключения запускается отдельный контейнер, генерируются ключи и корневой сертификат. После того как сервер настроен, вы можете подключаться по VPN к этому серверу.',
  },
  {
    label: 'Почему Amnezia сложнее заблокировать чем другие VPN?',
    content:
      'Чем крупнее и популярнее коммерческий VPN сервис, тем больше его вероятность попадания в поле зрения надзорных органов, а значит и выше вероятность блокировки доступа к его серверам и протоколам. С помощью Amnezia вы создаете на базе любого VPS собственный VPN только для вашего использования. При использовании собственного VPS в связке с зашифрованными VPN протоколами, вероятность блокировки существенно снижается. Это могут подтвердить наши пользователи из стран с высоким уровнем цензуры.',
  },
  {
    label: 'В чем преимущества Amnezia и других Self-hosted VPN перед остальными VPN?',
    content: (
      <>
        <p>
          <strong>Полный контроль</strong> - у вас полный контроль над вашим собственным сервером
          VPN, включая настройку, безопасность, логирование и доступ к данным. Вы можете выбирать
          конфигурацию, протоколы шифрования и настройки безопасности в соответствии с вашими
          требованиями. Более подробно в разделе принцип работы амнезии.
        </p>
        <p>
          <strong>Мобильность</strong> - возможность использовать свой настроенный VPN не только с
          клиентом Amnezia, но и с другими нативными приложениями OpenVPN, OpenVPN connect или
          Wireguard.
        </p>
        <p>
          <strong>Устойчивость к блокировкам по IP</strong> - многие сайты, а также государственные
          регуляторы знают IP адреса популярных VPN серверов и вносят их в “черный список”. Покупая
          отдельный VPS, ваш IP адрес используете только вы и люди с которыми вы поделились данными
          для подключения, поэтому только вы знаете что этот адрес используется для VPN
        </p>
        <p>
          <strong>Устойчивость к блокировкам по VPN-протоколу</strong> - Amnezia поддерживает
          протокол Open VPN с маскировкой трафика cloak, его можно установить при первом подключении
          к серверу. Более подробно о плагине cloak.
        </p>
        <p>
          <strong>Возможность поделиться с другими пользователями</strong> - Amnezia поддерживает
          возможность делиться подключением с неограниченным числом пользователей. Для этого просто
          купите любой VPS сервер подключитесь к нему с помощью Amnezia, создайте конфигурацию для
          подключения и поделитесь ей со всеми , кому доверяете.
        </p>
        <p>
          <strong>Открытый исходный код</strong> - Amnezia, в отличие от большинства других VPN,
          имеет открытый исходный код, как серверной, так и клиентской части. Amnezia не собирает,
          не хранит и не передает данные пользователей. Любой пользователь может проверить это,
          посмотрев код на github.
        </p>
        <p>
          <strong>Поддержка нескольких протоколов</strong> - На одном VPN клиенте вы можете
          использовать самые разные протоколы от максимально защищенных и безопасных, таких как
          AmneziaWG и OpenVPN с плагином маскировки Cloak, до самых простых и быстрых , таких как
          Wireguard и IKv2. Более подробно о протоколах и о том, как их установить.
        </p>
      </>
    ),
  },
  {
    label: 'Я скачал приложение, что дальше?',
    content: (
      <>
        После скачивания приложения вам необходимо ввести данные VPS. Вы можете использовать уже
        имеющийся у вас VPS, или купить новый. В качестве примера
        <TextLink
          to="../instructions/0_starter-guide"
          variant="light"
          text=" здесь "
          openInNewTab
        />
        приведены инструкции для покупки VPS на нескольких популярных хостингах. серверной и
        клиентской части ПО.
      </>
    ),
  },
  {
    label: 'Хочу купить VPS, какие опции выбрать?',
    content:
      'Amnezia работает с любыми серверами на KVM виртуализации с операционной системой Ubuntu (официально поддерживаемая версия — 20.04) и Debian 10.',
  },
  {
    label: 'Зачем мне сервер с KVM?',
    content:
      'Amnezia использует Docker для изолированного развертывания вашего VPN сервера. Не с каждым типом виртуализации возможно использование Docker, однако KVM это точно позволяет. С другими типами виртуализации работа с Docker может оказаться невозможной как в силу ограничений определенного типа виртуализации, так и в силу конфигурации от поставщика VPS.',
  },
  {
    label: 'Какой VPN протокол выбрать?',
    content: (
      <>
        <p>
          <strong>ВАЖНО!</strong> Если в вашей стране очень высокий уровень контроля, заблокирован
          доступ ко многим сайтам, не работают никакие коммерческие и бесплатные VPN и VPN
          протоколы, рекомендуем с первого подключения использовать OpenVPN over Cloak, так как
          используя другие протоколы, ваш личный VPN также может быть заблокирован, и вам придется
          приобретать новый VPS.
        </p>
        <p>
          <strong>OpenVPN</strong>, работающий через UDP, WireGuard и IKEv2 протоколы без маскировок
          трафика , работающие через сетевой протокол UDP - легко распознаются не только фаерволами,
          но и некоторыми сайтами. Из-за этого вы можете столкнуться с предупреждением “выключить
          VPN перед посещением сайта”
        </p>
        <p>
          Чтобы избежать этой проблемы используйте OpenVPN с TCP протоколом, а также OpenVPN over
          ShadowSocks и OpenVPN over Cloak.
        </p>
        <p>
          Во всех остальных случаях разница между протоколами минимальная, в том числе и по скорости
          в зависимости от региона.
        </p>
      </>
    ),
  },
  // {
  //   label: 'Что такое Kill Switch?',
  //   content: (
  //     <>
  //       <strong>Kill switch!</strong> — это функция экстренного разрыва интернет соединения,
  //       интегрированная в приложение. В случае непредвиденного разрыва вашего VPN соединения функция
  //       VPN <strong>kill switch</strong> автоматически отключит вас от Интернета.
  //     </>
  //   ),
  // },
  {
    label: 'Хочу использовать VPN, но не для всех сайтов. Что можно сделать?',
    content:
      'У Amnezia есть функция с помощью которой вы можете добавлять сайты-исключения в список, чтобы посещать их со своего IP адреса. Она доступна на главном экране при подключении.',
  },
  {
    label: 'Можно ли использовать авторизацию по ключам для AmneziaVPN?',
    content:
      'Можно, поддерживается авторизация как по паролю, так и по ключам. Поддерживаемые типы OpenSSH ключей: RSA (2048, 3072, 4096) и ECDSA (nistp256)',
  },
  {
    label: 'Могу я поделиться подключением с другими людьми?',
    content:
      'Да, вы можете делиться данными подключения со всеми кому доверяете, и использовать один VPS для неограниченного количества пользователей.',
  },
  {
    label: 'Для чего предназначена кнопка "Clear client cached profile"?',
    content:
      'По умолчанию Amnezia кэширует данные (сертификаты и ключи) от настроенного VPN сервера для быстрого подключения напрямую к серверу. Данная кнопка сбрасывает этот кэш, в результате будут сгенерированы новые сертификаты с ключами, которые посредством SSH подключения будут помещены на сервер и уже только потом произойдет подключение. Необходимо использовать при смене сервера (если установлено на нескольких VPS), при обновлении клиента или сервера. Может потребоваться при изменениях настроек контейнеров.',
  },
  {
    label: 'Amnezia выдаёт ошибку. Что делать?',
    content: (
      <>
        <p>
          Вы можете связаться с разработчиками через
          <TextLink
            text=" support@amnezia.org"
            to="mailto:support@amnezia.org"
            variant="light"
          />{' '}
          или <TextLink text="Telegram" to="https://t.me/amnezia_vpn" variant="light" /> чат.
          Обязательно приложите логи работы программы.
        </p>
        <p>Логи можно найти:</p>
        <strong>На Windows:</strong>
        <ul>
          <li>C:\Users\%USERNAME%\AppData\Roaming\AmneziaVPN.ORG\AmneziaVPN\log</li>
          <li>C:\ProgramData\AmneziaVPN\log</li>
        </ul>
        <br />
        <strong>На MacOS:</strong>
        <ul>
          <li>/$HOME/Library/Application\ Support/AmneziaVPN.ORG/AmneziaVPN/</li>
          <li>/var/log/AmneziaVPN/AmneziaVPN-service.log</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Могу ли я использовать свой новый VPN в других приложениях?',
    content:
      'Да. Если вы хотя бы один раз подключились через Amnezia, значит Amnezia настроила для Вас VPN и вы можете подключаться к Вашему VPN через другие оригинальные приложения.',
  },
  {
    label: 'Почему нельзя использовать VPS из публичных источников?',
    content:
      'Данные соединения могут быть уязвимы для перехвата, что может поставить под угрозу ваш трафик и персональные данные. Для обеспечения безопасного соединения используйте VPS, приобретенный у надежного провайдера, или данные, переданные вам надежным источником".',
  },
  {
    label: 'Что делать если не работает OpenVPN over Cloak?',
    content:
      'OpenVPN over Cloak установленный на версии Amnezia 2.0.2 не совместим с версией клиента 3.0.0 и выше. Для корректной работы переустановите протокол.',
  },
];

export default faqDataRu;
