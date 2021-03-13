import { SliceCaseReducers } from '@reduxjs/toolkit';

export function generateReducers<SliceState>(
  reducers: SliceCaseReducers<SliceState>
): SliceCaseReducers<SliceState> {
  return { ...reducers };
}
