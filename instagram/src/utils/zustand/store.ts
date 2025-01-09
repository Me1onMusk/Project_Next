
import { create } from "zustand";

// 상태와 액션 타입 정의
interface SelectedUserIdState {
    selectedUserId: string;   //선택된 인덱스 상태
    setSelectedUserId: (index: string) => void;  //선택된 인덱스 업데이트 함수
};

export const useIdStore = create<SelectedUserIdState>((set) => ({
    selectedUserId: "",  //초기 상태
    setSelectedUserId: (index) => set({ selectedUserId: index })  //상태 업데이트
}));

interface SelectedUserIndex {
    selectedUserIndex: null | number,
    setSelectedUserIndex: (index: null | number) => void;
};

export const useIndexStore = create<SelectedUserIndex>((set) => ({
    selectedUserIndex: null,
    setSelectedUserIndex: (index) => set({ selectedUserIndex: index })
}));

interface PresenceState {
    presence: null
    setPresence: (index: null) => void;
}

export const usePresenceState = create<PresenceState>((set) => ({
    presence: null,
    setPresence: (index) => set({ presence: index })
}));