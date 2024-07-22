

function ErrorPage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-9xl font-semibold text-red-700'>404</h1>
            <h1 className='text-4xl font-semibold'>Page Not Found</h1>
            <h1
                className='text-lg hover:cursor-pointer hover:underline hover:text-red-700 hover:decoration-blue-700'
                onClick={() => window.history.back()}
            >
                Go Back
            </h1>
        </div>
    )
}

export default ErrorPage