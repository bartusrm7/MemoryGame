import { create } from "zustand";

interface TimerState {}

const useTimerState = create<TimerState>(set => ({}));

export default useTimerState;
