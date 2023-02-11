import Head from 'next/head'
import Navbar from '../../components/Navbar'
import HeadingText1 from '../../components/HeadingText1'
import HeadingText2 from '../../components/HeadingText2'

const Privacy = () => {
  return (
    <div className='m-0 p-0 min-h-screen bg-gray-900 opacity-90'>
      <Head>
        <title>TMP Apps | Wi-Fi Info Privacy Policy</title>
        <meta name="description" content="A website featuring all of my projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar shouldScrollToTop={false} border="border-b-2 border-gray-800" icon="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z">
        Wi-Fi Info Privacy Policy
      </Navbar>

      <div className='flex-grow pb-8 xsm:m-8 text-white lg:mx-auto lg:px-8 max-w-7xl'>
        <HeadingText1>
          Privacy Policy
        </HeadingText1>
        <p className='text-lg leading-8'>
          TMP Apps built the Wi-Fi Info app as an Open Source app.
          <br/>
          This Application is provided by TMP Apps at no cost and intended for use as is.
          <br/>
          This page is used to inform visitors regarding our policies with the collection and
          use of Personal Information if anyone decided to use our Application.
          <br/>
          If you choose to use our Application, then you agree to the collection of information
          in relation to this policy.
        </p>
        <HeadingText2>
          Information Collection and Use
        </HeadingText2>
        <p className='text-lg leading-8'>
          For this app to function properly, data about network information and identifiers, such as your IP (Internet Protocol) address are being used by the Application,
          though this data will be retained on your device and not collected or used by us in any way.
        </p>
        <HeadingText2>
          Changes to This Privacy Policy
        </HeadingText2>
        <p className='text-lg leading-8'>
          We may update our Privacy Policy from time to time.
          <br/>
          Thus, you are advised to review this page periodically for any changes.
          We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p className='text-lg leading-8'>
          This policy is effective as of <b>2023-02-11</b>
        </p>
        <HeadingText2>
          Contact Us
        </HeadingText2>
        <p className='text-lg leading-8'>
          If you have any questions or suggestions about our
          Privacy Policy, do not hesitate to contact us at <a className='underline text-blue-400 hover:text-blue-600 visited:text-purple-600' href="mailto:contact.tmp.apps@gmail.com">contact.tmp.apps@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}

export default Privacy;