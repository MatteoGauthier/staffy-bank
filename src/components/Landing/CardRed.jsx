import React from "react"
import RedCard from "../../assets/image/RedCard.png"
export default function CardRed() {
	return (
		<div className="card">
			<img className="redCard" src={RedCard} />
			<div className="card-wrapper">
				<div className="bgRed">
					<div>
						<div className="card-item-check">
							<svg width="1em" height="1em" viewBox="0 0 24 24">
								<path d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7z" fill="currentColor"></path>
							</svg>
							<span>Virement illimité</span>
						</div>
						<div className="card-item-check">
							<svg width="1em" height="1em" viewBox="0 0 24 24">
								<path d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7z" fill="currentColor"></path>
							</svg>
							<span>Application mobile</span>
						</div>
						<div className="card-item-check">
							<svg width="1em" height="1em" viewBox="0 0 24 24">
								<path d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7z" fill="currentColor"></path>
							</svg>
							<span>Conseillé en ligne</span>
						</div>
						<div className="card-item-check">
							<svg width="1em" height="1em" viewBox="0 0 24 24">
								<path d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7z" fill="currentColor"></path>
							</svg>
							<span>Achat à l’étrangé</span>
						</div>
					</div>
					<div className="card-button-red">
						<p className="text-xl font-bold text-white">Choose it !</p>
					</div>
				</div>
				<svg width="99" height="140" viewBox="0 0 99 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.904 114.917H12.284C8.412 114.917 5.42 115.973 3.308 118.085C1.196 120.197 0.139997 123.211 0.139997 127.127C0.139997 130.955 1.174 133.903 3.242 135.971C5.31 137.995 8.324 139.007 12.284 139.007H12.944C14.836 139.007 16.464 138.919 17.828 138.743C19.192 138.523 20.402 138.193 21.458 137.753C22.47 137.269 23.35 136.631 24.098 135.839C24.846 135.003 25.55 133.991 26.21 132.803L27.332 130.493C27.948 129.349 28.476 128.447 28.916 127.787C29.312 127.083 29.708 126.555 30.104 126.203C30.456 125.851 30.83 125.631 31.226 125.543C31.622 125.455 32.128 125.411 32.744 125.411H36.308C37.056 125.411 37.606 125.543 37.958 125.807C38.31 126.071 38.486 126.467 38.486 126.995C38.486 127.479 38.31 127.853 37.958 128.117C37.562 128.381 37.012 128.513 36.308 128.513H30.896V139.073H35.45C39.41 139.073 42.446 138.061 44.558 136.037C46.626 134.013 47.66 131.043 47.66 127.127C47.66 123.211 46.604 120.197 44.492 118.085C42.38 115.929 39.366 114.851 35.45 114.851H34.526C32.634 114.851 31.006 114.961 29.642 115.181C28.278 115.357 27.112 115.687 26.144 116.171C25.132 116.611 24.274 117.227 23.57 118.019C22.822 118.767 22.14 119.735 21.524 120.923L20.534 122.969C19.874 124.245 19.324 125.257 18.884 126.005C18.444 126.709 18.026 127.259 17.63 127.655C17.234 128.007 16.838 128.227 16.442 128.315C16.002 128.403 15.496 128.447 14.924 128.447H11.492C10.788 128.447 10.26 128.337 9.908 128.117C9.512 127.853 9.314 127.479 9.314 126.995C9.314 126.511 9.512 126.137 9.908 125.873C10.26 125.609 10.788 125.477 11.492 125.477H16.904V114.917ZM11.492 102.86C11.052 102.86 10.7 102.816 10.436 102.728C10.172 102.64 9.952 102.53 9.776 102.398C9.6 102.266 9.49 102.112 9.446 101.936C9.358 101.716 9.314 101.518 9.314 101.342C9.314 101.078 9.358 100.858 9.446 100.682C9.49 100.506 9.6 100.352 9.776 100.22C9.952 100.088 10.172 99.9785 10.436 99.8905C10.7 99.8025 11.052 99.7585 11.492 99.7585H22.646V89.1985H12.284C10.304 89.1985 8.566 89.4845 7.07 90.0565C5.53 90.6285 4.254 91.4425 3.242 92.4985C2.23 93.5545 1.46 94.8525 0.931999 96.3925C0.403998 97.8885 0.139997 99.5825 0.139997 101.474C0.139997 103.366 0.403998 105.06 0.931999 106.556C1.416 108.008 2.164 109.24 3.176 110.252C4.188 111.264 5.464 112.056 7.004 112.628C8.5 113.156 10.26 113.42 12.284 113.42H35.45C37.474 113.42 39.256 113.156 40.796 112.628C42.292 112.056 43.568 111.264 44.624 110.252C45.636 109.24 46.406 108.008 46.934 106.556C47.418 105.06 47.66 103.366 47.66 101.474C47.66 99.5825 47.396 97.8885 46.868 96.3925C46.34 94.8525 45.57 93.5545 44.558 92.4985C43.546 91.4425 42.292 90.6285 40.796 90.0565C39.256 89.4845 37.474 89.1985 35.45 89.1985H25.154V99.7585H36.308C36.704 99.7585 37.034 99.8025 37.298 99.8905C37.562 99.9785 37.782 100.088 37.958 100.22C38.134 100.352 38.266 100.506 38.354 100.682C38.442 100.858 38.486 101.078 38.486 101.342C38.486 101.518 38.442 101.716 38.354 101.936C38.266 102.112 38.134 102.266 37.958 102.398C37.782 102.53 37.562 102.64 37.298 102.728C37.034 102.816 36.704 102.86 36.308 102.86H11.492ZM0.799997 74.3701H18.752V77.1421H0.799997L0.799997 87.7021H47L47 77.1421H27.86V74.3701H47V63.8101H0.799997L0.799997 74.3701ZM0.799997 62.3076H47V51.7476H0.799997L0.799997 62.3076ZM0.799997 35.8669L28.652 33.2929V33.8869L0.799997 38.8369L0.799997 50.2549H47V39.6949L19.346 42.0709V41.4769L47 36.7909V25.3069H0.799997L0.799997 35.8669ZM0.799997 24.2926L34.328 17.6926H47V7.13264H34.328L0.799997 0.268639L0.799997 10.8286L19.742 11.9506V12.6106L0.799997 13.7326L0.799997 24.2926ZM52.8 63.5142L52.8 86.7462H61.974L61.974 80.4102H99V69.8502H61.974V63.5142H52.8ZM52.8 62.3076H99V51.7476H81.906V50.6916C81.906 49.9876 82.082 49.5256 82.434 49.3056C82.742 49.0416 83.314 48.9096 84.15 48.9096H89.496C91.3 48.9096 92.994 48.8876 94.578 48.8436C96.118 48.7556 97.592 48.5576 99 48.2496V37.6896C97.592 37.9536 96.14 38.1296 94.644 38.2176C93.148 38.3056 91.476 38.3496 89.628 38.3496H89.034C87.274 38.3496 85.712 38.5696 84.348 39.0096C82.984 39.4056 81.818 39.9336 80.85 40.5936C79.882 41.2096 79.134 41.9356 78.606 42.7716C78.034 43.5636 77.726 44.3336 77.682 45.0816H76.956C76.912 44.3336 76.648 43.5636 76.164 42.7716C75.68 41.9356 74.954 41.2096 73.986 40.5936C73.018 39.9336 71.83 39.4056 70.422 39.0096C69.014 38.5696 67.364 38.3496 65.472 38.3496H65.142C60.962 38.3496 57.86 39.4056 55.836 41.5176C53.812 43.6296 52.8 46.6436 52.8 50.5596V62.3076ZM61.974 51.7476V50.6916C61.974 49.9876 62.15 49.5256 62.502 49.3056C62.81 49.0416 63.382 48.9096 64.218 48.9096H70.422C71.302 48.9096 71.918 49.0416 72.27 49.3056C72.578 49.5256 72.732 49.9876 72.732 50.6916V51.7476H61.974ZM52.8 36.7197H99V26.1597H52.8V36.7197ZM52.8 24.667H99L99 14.107H84.81V13.051C84.81 10.939 84.546 9.11298 84.018 7.57298C83.446 6.03298 82.566 4.75698 81.378 3.74498C80.19 2.68898 78.606 1.91898 76.626 1.43498C74.646 0.950983 72.204 0.708982 69.3 0.708982H69.168C63.492 0.708982 59.356 1.76498 56.76 3.87698C54.12 5.98898 52.8 9.00298 52.8 12.919V24.667ZM61.974 14.107V13.051C61.974 12.303 62.172 11.819 62.568 11.599C62.92 11.379 63.558 11.269 64.482 11.269H73.194C74.118 11.269 74.756 11.379 75.108 11.599C75.46 11.819 75.636 12.303 75.636 13.051V14.107H61.974Z" fill="#FF3867"/>
</svg>

			</div>
		</div>
	)
}