import Head from 'next/head'
import Navbar from '../../components/Navbar'
import HeadingText1 from '../../components/HeadingText1'
import HeadingText2 from '../../components/HeadingText2'

const Privacy = () => {
  return (
    <div className='m-0 p-0 min-h-screen bg-gray-900 opacity-90'>
      <Head>
        <title>TMP Apps | Wi-Fi Info Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Wi-Fi Info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar blurFromPx={36} border="border-b-2 border-gray-800" icon="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z">
        Wi-Fi Info Privacy Policy
      </Navbar>

      <div className='flex-grow pb-8 xsm:m-8 text-white lg:mx-auto lg:px-8 max-w-7xl'>
        <HeadingText1 className='mb-4'>
          Privacy Policy
        </HeadingText1>
        <p className='text-lg leading-8'>
          This Privacy Policy governs the manner in which <b>TMP Apps</b> ("we", "us" or "our") collects, uses, maintains, and discloses information collected from
          users (referred to as "you", "user" or "users") of the <b>Wi-Fi Info</b> application (referred to as the "Application").
        </p>
        <HeadingText2>
          1. Information Collection and Usage
        </HeadingText2>
        <p className='text-lg leading-8'>
          We <b><u>do not</u></b> collect any personal information or data from the Application's users.
          <br/>
          We are committed to respecting your privacy, and we <b><u>do not</u></b> share any user data with third-party services, organizations, or individuals.
        </p>
        <HeadingText2>
          2. Does the Application collect precise location information of the device?
        </HeadingText2>
        <p className='text-lg leading-8'>
          The Application <b><u>does not</u></b> collect precise information about the location of user's mobile device.
        </p>
        <HeadingText2>
          3. Children
        </HeadingText2>
        <p className='text-lg leading-8'>
          We <b><u>do not</u></b> knowingly collect personal information from anyone under the age of 13.
        </p>
        <HeadingText2>
          4. Permissions
        </HeadingText2>
        <p className='text-lg leading-8'>
          The Application requires access to location permissions such as <b>ACCESS_FINE_LOCATION</b> and <b>ACCESS_COARSE_LOCATION</b>.
          <br/>
          These permissions are solely used to access the Android Wi-Fi API, which is necessary for the proper functioning of the Application.
          <br/>
          We <b><u>do not</u></b> use the location permission for any other purposes.
        </p>
        <hr className='my-6'/>
        <p className='text-lg leading-8'>
          The Application requests access to the background location permission (<b>ACCESS_BACKGROUND_LOCATION</b>).
          <br/>
          This permission is used to provide certain network information such as SSID and BSSID, in the foreground service notification since Android 11 and higher.
          <br/>
          Granting this permission allows users to view the network information in the notification tray without opening the Application.
          <br/>
          <b>Please note that granting this permission is optional, and it is only used for the sole purpose of providing this specific feature.</b>
        </p>
        <HeadingText2>
          5. Changes to this Privacy Policy
        </HeadingText2>
        <p className='text-lg leading-8'>
          We reserve the right to update this Privacy Policy at any time.
          <br/>
          We encourage you to review this Privacy Policy periodically for any changes.
          <br/>
          Your continued use of the Application after any modifications to this Privacy Policy constitutes your acceptance of those changes.
        </p>
        <p className='text-lg leading-8'>
          This Privacy Policy was last updated on <b>2023-06-01</b>.
        </p>
        <HeadingText2>
          6. Contact Us
        </HeadingText2>
        <p className='text-lg leading-8'>
          If you have any questions or concerns regarding your privacy while using the Application,
          do not hesitate to contact us at <a className='font-semibold underline text-blue-400 hover:text-blue-600 visited:text-purple-600' href="mailto:contact.tmp.apps@gmail.com">contact.tmp.apps@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}

export default Privacy;