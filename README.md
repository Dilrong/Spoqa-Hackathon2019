# Party Party
Party Party는 가상으로 자신의 생일을 축하해주는 프로그램입니다.

2019 스포카 무쓸모톤에서 진행한 작품으로 무쓸모한 프로젝트를 주제로 진행하였습니다.
## Getting Start
```
npm install
npm start
```
Create-React-App 기반으로 제작되었습니다.

크게 사용하고 있는 라이브러리는 MobX, react-mic, react-webcam 입니다.

자세한 dependencies, scripts는 package.json을 참고해주시면 됩니다.
## File Structure
```
public
 - image
 - audios
  - favicon.ico
  - index.html
  - manifest.json
src
 - components
 - pages
 - stores
 - App.js
 - App.scss
 - index.js
 - index.scss
 - serviceWorker.js
```
### public
배포에 필요한 파일을 불러오기 위한 폴더입니다.
### components
component를 담고 있는 폴더로 index.js를 이용하여 import를 관리합니다.
- Copyright
- Firework : 폭죽효과를 위한 컴포넌트입니다.
- Header
- Navbar : 메뉴바로 컴포넌트 state문제로 사용하지 않습니다.
### page
뷰페이지와 로직을 관리하는 폴더로 index.js를 이용하여 import를 관리합니다. 
- Cake : 메인페이지입니다.
## Function
- `onTakePhoto()` : react-webcam, 사진을 캡쳐를 위함
- `onData()` : react-mic, 마이크에 들어오는 음성을 받기 위함
- `onStop()` : react-mic, 마이크 정지
- `onApplause()` : 박수 효과

## Version History
| Date  | Version | author |
| ------------- | ------------- | ------------- |
| 2019.05.19   | v1.0.0 | 이학성 |
