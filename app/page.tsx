"use client";

import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://github.com/24mapsee/mapsee_front/raw/refs/heads/develop/apk/mapsee.apk.zip";
    link.download = "mapsee.apk.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full w-full">
      <ReactFullpage
        credits={{ enabled: false, label: "" }}
        licenseKey="YOUR_KEY_HERE"
        render={({ fullpageApi }) => {
          {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="flex justify-center px-4 py-8 h-full md:items-center">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-x-24 md:grid-rows-[6rem_auto] md:gap-y-16 max-h-[900px]">
                      <div className="md:col-start-2 md:row-start-1 flex justify-center md:justify-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="md:h-24 h-16 w-auto"
                          viewBox="0 0 124 93"
                        >
                          <path
                            fill="#FF8200"
                            d="M113 31c-.367 0-.681-.1033-.943-.31-.262-.2067-.458-.4779-.589-.8137-.505-1.2957-1.257-2.7513-1.886-4.0688-.733-1.2658-1.768-2.7512-3.103-4.4562-1.336-1.705-2.423-3.3326-3.261-4.8826-.812-1.55-1.218-3.4229-1.218-5.6187 0-3.0225 1.061-5.58 3.182-7.6725C107.33 1.05917 109.936 0 113 0s5.657 1.05917 7.779 3.1775C122.926 5.27 124 7.8275 124 10.85c0 2.3508-.458 4.3142-1.375 5.89-.89 1.55-1.925 3.0871-3.104 4.6113-1.414 1.8599-1.859 3.41-2.592 4.65-.786 1.8987-1.1 2.467-1.572 3.8362-.26.7564-.786 1.1625-1.571 1.1625H113Zm0-16.275c1.1 0 2.03-.3746 2.789-1.1237.76-.7492 1.14-1.6663 1.14-2.7513 0-1.085-.38-2.00208-1.14-2.75125C115.03 7.34958 114.1 6.975 113 6.975s-2.03.37458-2.789 1.12375c-.76.74917-1.14 1.66625-1.14 2.75125 0 1.085.38 2.0021 1.14 2.7513.759.7491 1.689 1.1237 2.789 1.1237ZM102.313 33.3601v55.808h-7.6801v-55.808h7.6801Zm-24.8961 49.152c1.152-1.5787 2.2187-3.5413 3.2-5.888.9813-2.3893 1.472-4.608 1.472-6.656 0-2.6027-.896-4.5013-2.688-5.696-.4693 4.3947-1.7706 7.9787-3.904 10.752-2.1333 2.7307-5.312 4.2453-9.536 4.544-2.176.128-4.0747-.256-5.696-1.152-1.5787-.896-2.7947-2.1333-3.648-3.712s-1.28-3.3067-1.28-5.184c0-2.0053.4907-3.9467 1.472-5.824s2.4747-3.4773 4.48-4.8c2.048-1.3653 4.544-2.2613 7.488-2.688l3.136-.32v-20.864h7.68v21.312c3.5414.8107 6.08 2.4107 7.616 4.8 1.536 2.3467 2.304 5.1627 2.304 8.448 0 2.2613-.2986 4.544-.896 6.848-.5973 2.2613-1.344 4.288-2.24 6.08h-8.96Zm-11.968-9.984c2.048-.128 3.5627-.9813 4.544-2.56 1.024-1.5787 1.6427-3.9253 1.856-7.04l-2.048.192c-2.2613.3413-3.968 1.152-5.12 2.432-1.1093 1.2373-1.664 2.5813-1.664 4.032 0 .896.2133 1.6213.64 2.176.4693.5547 1.0667.8107 1.792.768ZM15.6319 81.2321c0 1.2373 1.1094 2.176 3.328 2.816 2.2614.64 5.056.96 8.384.96.768 0 1.9627-.0427 3.584-.128 3.072-.1707 5.3334-.5973 6.784-1.28 1.4507-.64 2.2614-1.5787 2.432-2.816-2.8586-.64-5.8453-1.1733-8.96-1.6-3.1146-.4267-5.8666-.64-8.256-.64-4.864 0-7.296.896-7.296 2.688Zm32.256-47.872v33.408h-7.68v-11.904h-3.84v11.904h-7.68v-32.768h7.68v13.184h3.84v-13.824h7.68ZM.335938 35.0881H25.4239v27.904h-13.76c-3.45596 0-6.14396-.9813-8.06396-2.944-1.87734-1.9627-2.709336-4.6507-2.496-8.064.34133-3.328.93866-6.6133 1.792-9.856H.335938v-7.04Zm7.616002 32.896h7.67996v4.48c2.2187-.5973 4.864-.896 7.936-.896 4.9494 0 10.496.6827 16.64 2.048v-4.992h7.68v11.584c0 3.6693-1.472 6.4427-4.416 8.32-2.9013 1.92-6.912 3.0507-12.032 3.392-1.792.0853-3.1146.128-3.968.128-5.5466 0-10.1973-.8533-13.952-2.56-3.71196-1.7067-5.56796-4.4587-5.56796-8.256v-13.248Zm.832-15.488c-.08534 1.3227.064 2.24.448 2.752.42666.4693 1.23736.704 2.43196.704h6.08v-13.824h-6.976c-.93863 3.2-1.59996 6.656-1.98396 10.368Z"
                          />
                        </svg>
                      </div>
                      <div className="md:row-span-2 md:col-start-1 md:row-start-1">
                        <div className="relative max-w-lg flex justify-center items-centerm md:pt-8 pt-3">
                          <img
                            src="/images/img_pr.png"
                            alt="phone"
                            className="w-2/3 md:w-full"
                          />
                        </div>
                      </div>
                      <div className="md:col-start-2 flex items-center flex-col md:items-start md:pb-0 pb-16">
                        <h1 className="md:text-start text-center pt-2 font-extrabold text-4xl md:text-6xl">
                          나의,
                          <br />
                          나에 의한
                          <br />
                          나를 위한 지도
                        </h1>
                        <p className="md:text-start text-center md:py-8 py-4 text-xl md:text-2xl font-bold text-gray-600">
                          K-PaaS 플랫폼 기반 맞춤형 지도 플랫폼
                        </p>
                        <button
                          className="bg-brand-600 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center"
                          onClick={handleDownload}
                        >
                          <svg
                            className="fill-white w-4 h-4 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                          </svg>
                          <span className="text-white">
                            안드로이드 앱 다운로드
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section bg-slate-100">
                  <div className="flex justify-center px-4 py-8 h-full items-center w-full flex-col">
                    <p className="text-center text-2xl pb-2 font-semibold text-brand-500">
                      서비스 구성
                    </p>
                    <p className="text-center text-4xl pb-8 font-semibold">
                      K-PaaS 플랫폼 기반 맞춤형 지도 플랫폼
                    </p>
                    {/* <img src="/images/1.jpg" alt="phone" className="" /> */}
                    <img
                      src="/images/2.svg"
                      alt="서비스 구성"
                      width={1000}
                      className="w-4/6"
                    />
                    <p className="text-center py-8 font-light leading-7">
                      맵시 애플리케이션은 지속 가능한 국내 여행 활성화를 목표로
                      사용자 맞춤형 경로 생성 및 공유 기능을 제공합니다. <br />
                      사용자들은 커스텀 경로를 만들어 다른 사용자와 피드를 통해
                      공유할 수 있습니다. <br />
                      이러한 맵시 서비스는 개방형 클라우드 플랫폼 표준모델을
                      기반으로 K-PaaS 적합성을 인증받은
                      <br /> Naver Cloud Platform NCP을 활용하여 안전하고 확장
                      가능한 방식으로 구현하였습니다.
                    </p>
                  </div>
                </div>
                <div className="section">
                  <div className="flex justify-center px-4 py-8 h-full items-center w-full flex-col">
                    <p className="text-center text-2xl pb-2 font-semibold text-brand-500">
                      개발환경 아키텍처 구성
                    </p>
                    <p className="text-center text-4xl pb-8 font-semibold">
                      고가용성 확보 클라우드 설계 및 구축
                    </p>
                    {/* <img src="/images/1.jpg" alt="phone" className="" /> */}
                    <img
                      src="/images/1.svg"
                      alt="개발환경 아키텍처 구성"
                      width={1000}
                      className="w-4/6"
                    />
                    <p className="text-center py-8 font-light leading-7">
                      로드 밸런싱, 오토 스케일링 등 고가용성 보장과 함께
                      안전하고 확장 가능한 아키텍처로 설계하였습니다. <br />
                      Auto CI/CD 파이프라인을 구축하여 개발 및 배포 프로세스를
                      자동화하였습니다. <br />
                    </p>
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }
        }}
      ></ReactFullpage>
    </div>
  );
}
