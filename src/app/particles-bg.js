import Script from 'next/script';

export default function Background() {
    return (
        <div>
            <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" />
            <div id="particles-bg" className="absolute top-0 left-0 w-screen h-screen bg-yellow bg-cover bg-center bg-no-repeat -z-10"/>
            <Script src="/js/bg.js" />
        </div>
    )
}