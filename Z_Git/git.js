/* 
! 버전 관리 시스템
: 파일 변경 이력을 관리하는 소프트웨어 시스템

  ? 중요성
    : 협업 강화, 변경 이력 추적, 데이터 백업 및 복구

! Git 사용 방법

1. 설치 
  : 구글 > git > https://git-scm.com (공식 웹사이트) > download > 64-bit Git for Windows Setup (운영체제에 맞는 git 설치) > 다 next 누른 후 Install
  [64-bit Git for Windows Setup ( ctrl 옆의 윈도우 버튼 > 시스템 정보 > 시스템 종류 )]

2. 확인
  : 윈도우 버튼 > cmd 검색 > git --version 작성

3. 기본 설정 (Git에 사용자 이름과 이메일 설정)
- 시작 버튼 > 자격 증명 관리자 > 'windows 자격 증명' 클릭 > 일반 자격 증명 > git / github / sourcetree [타인의 아이디로 설정되어 있는 경우 삭제] > 브라우저에서 github 로그인 상태 확인

- 사용자 이름과 이메일 설정
  : windows (Git Bash, cmd)
  : MacOS (Git Bash, 터미널)
  >> 위 환경에서의 붙여넣기 : shift + Ins
  >> 새로운 명령어 환경 열기 : ctrl + c
  >> 방향키(위/아래) : 이전 또는 앞전의 명령어 붙여넣기

  ? 사용자 이름 설정
    git config --global user.name hyeon002
  
  ? 사용자 이메일 주소 설정
    git config --global user.email 깃허브이메일
  
  ? 설정 확인
    git config --global user.name
    git config --global user.email

git의 구조 (사진?)

  ! Git 의 구조적 요소
    1. workspace : 개발자가 코드를 작성하는 공간

    2. staging area : 커밋하기 전에 파일의 변경사항을 준비하는 장소, 기존의 로컬 스토리지와의 변경사항을 검토하고 커밋할 항목을 결정 

    3. local repository : 사용자의 개인 컴퓨터에 위치한 저장소, 개인 작업을 진행하고 저장

    4. remote repository : 인터넷이나 네트워크에 위치한 저장소, GitHub의 호스팅 서비스를 사용

  ! Git 의 주요 명령어
    1. 새로운 Git 저장소 초기화
      >> 명령어 사용 시 해당 폴더에 .git 디렉토리가 생성
      : git init

    2. Git 상태 확인
      >> 현재 저장소의 상태를 보여줌 
        (변경된 파일, 스테이징된 파일, 커밋되지 않은 사항을 확인)
      : git status

    3. Git 사용 명령어
      ? git add . 
        : 파일을 스테이징 영역에 추가하여 Git이 추적하게 함
        : git add 파일명 / git add . (모든 변경사항 추가)
      
      ? git commit -m "커밋 메시지"
        : 스테이징 영역의 변경사항을 (로컬)저장소의 기록으로 작성
        : 20240128 hhj grid layout (커밋 메시지 작성 방법 예시)
          [날짜 이니셜 변경사항내용 등]
      
      ? git push 
        : 로컬 변경사항을 리모트 저장소에 업로드 
        : git push origin main

      ? git pull
        : 리모트 저장소의 변경사항을 로컬로 가져오는 명령어
        : 로컬에서 작업확경(work space)까지 바로 사용 가능
        : git pull origin main 

  ! Git 과 Github 연동 
  + repository 개설
      github 화면 > 오른쪽 프로필화면 > your repository > new > Owner(자신인지 확인) > Repository name (이름 작성) > Desciption (설명 작성) > 만들기
    ? 리포지토리 개설 후 첫 연동

echo "# Frontend-study" >> README.md
>> README.md 파일을 생성
  (# git-practice (자신의 repository 이름) 텍스트를 추가)
git init
git add README.md
git commit -m "first commit"

git branch -M main
>> 현재 브랜치 이름을 main으로 변경
  : 기본 브랜치명(master)을 main으로 변경 

git remote add origin https://github.com/hyeon002/Frontend-study.git
>> 리모트 저장소를 추가

git push -u origin main
>> 로컬 리포지토리 main 브랜치를 원격 리포지토리에 푸시 
>> -u : 추후 git push 나 git pull을 진행할 때 브랜치 이름을 생략 가능하도록 설정


  + 로컬디스크 > 새로운 폴더 생성 > 우클릭 > open git bash here > (echo "# Frontend-study" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hyeon002/Frontend-study.git
git push -u origin main) > shift+Ins 키로 붙여넣기 > sign in with your browser > authorize git-ecosystem > 비밀번호 작성 > ITPS@DESKTOP-NUOPUIF MINGW64 /c/fronted-1223-hhj-git (main) 인지 확인 > README 업로드 됐는지 확인

  ! 연동된 저장소에 새로운 파일 추가 
  1. 변경된 사항 확인
    git status
  
  2. workspace에서 remote repository 까지 파일 업로드
    git add .
    git commit -m "20240128 hhj"
    git push origin main

git add .
git commit -m "20240203 hhj"
git push origin main

    ? 리모트 저장소 추가
    + 새로운 폴더 생성 > open git bash ~ 클릭 > git init

    새롭게 작업할 로컬환경에서 새폴더에 git bash 열기
    1. git 초기화
      git init

    2. 브랜치 이름 변경
      git branch -M main

    3. 작업하는 환경(workspace)과 원격 리포지토리를 연결
      : git remote add origin 리모트저장소URL
      git remote add origin https://github.com/hyeon002/Frontend-study.git
    + github > Code 클릭 > HTTPS > 복사 버튼 클릭

    4. 원격 리포지토리의 내용을 받아오기
      git pull origin main
*/