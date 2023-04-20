import { createFeatureSelector } from '@ngrx/store';
import { User } from './user.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users')