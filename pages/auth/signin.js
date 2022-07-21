import { getProviders, getSession, signIn } from 'next-auth/react'

export default function SignIn({ providers }) {
  return (
    <>
      <div className="flex flex-col min-h-[50vh] h-[50vh]">
        <div className="my-auto mx-auto cursor-pointer space-y-5">
          {Object.values(providers).map((provider) => (
            <div
              key={provider.name}
              className="flex py-2 px-5 space-x-3 bg-white border-2 shadow-md rounded-xl justify-center h-5 min-h-full hover:bg-orange-100   text-md font-medium text-black transition hover:scale-105 hover:shadow-xl active:bg-orange-500 focus:outline-none focus:ring"
            >
              <img
                layout="responsive"
                src={`/${provider.name}.png`}
                width={40}
                height={40}
              />
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: '/' },
    }
  }

  const providers = await getProviders()
  return {
    props: { providers },
  }
}
