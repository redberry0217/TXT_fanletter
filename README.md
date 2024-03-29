# From MOA to TOMORROW X TOGETHER

하이브의 보이그룹 '투모로우바이투게더'에게 멤버별로 팬레터를 작성하는 페이지입니다.
모아(MOA)는 그룹의 팬덤을 지칭하는 이름입니다:D

## 브랜치 설명
### `props-drilling`
프로젝트의 모든 state를 부모-자식 컴포넌트로 명시적으로 전달하여 관리합니다.

### `context`
프로젝트의 letters state를 context로 관리합니다.

### `redux`
프로젝트의 letters state를 redux로 관리합니다.

## 기능 설명

### `1. Create`

+ Addform에서 input/select/textarea에 입력한 내용을 submit하여 팬레터를 추가하는 기능입니다.
+ 닉네임과 내용은 각각 최대 20자, 최대 100자 입력 가능합니다.
+ 닉네임과 내용 중 하나라도 작성하지 않으면 팬레터를 등록할 수 없습니다.
+ 팬레터를 submit하면, select에서 선택한 멤버의 카테고리로 자동 이동됩니다.

### `2. Read`

+ HeaderMenu에서 멤버들의 이름을 클릭하면, 전체 팬레터 리스트에서 해당 멤버의 레터만 필터링하여 출력합니다.
+ 작성된 팬레터가 없는 경우 관련 메시지가 출력됩니다.
+ 출력 화면에서 팬레터의 내용이 1줄을 초과하는 경우 ...처리하여 나머지 내용은 생략합니다.
+ 팬레터 리스트에서 상세히 보고싶은 팬레터를 클릭하면 detail페이지로 이동하고 팬레터의 전체 내용을 출력합니다.

### `3. Update`

+ 팬레터 detail페이지에서 수정하기 버튼을 통해 팬레터의 내용을 수정할 수 있습니다.
+ 기존 내용과 비교하여 아무 것도 수정된 내용이 없으면 수정을 진행할 수 없습니다.
+ 수정하기 textarea를 비우면 수정을 진행할 수 없습니다.
+ 취소하기 버튼을 클릭하면 사용자에게 정말 수정을 취소할 것인지 한번 더 확인합니다.

### `4. Delete`

+ 팬레터 detail페이지에서 삭제하기 버튼을 통해 해당 팬레터를 삭제할 수 있습니다.
+ 삭제하기 버튼을 클릭하면 사용자에게 정말 삭제할 것인지 한번 더 확인합니다.
+ 팬레터를 삭제하고 Home으로 돌아가도 선택되어 있었던 멤버 카테고리는 동일하게 유지됩니다.
