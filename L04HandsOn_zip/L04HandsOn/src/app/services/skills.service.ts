import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {
    skills: Skill[] = [
        {
            id: 0,
            name: 'Front End Development',
            level: Level.Beginner
        },
        {
            id: 1,
            name: 'Problem Solver',
            level: Level.Expert
        },
        {
            id: 2,
            name: 'Team Player',
            level: Level.Expert
        }
    ];

    constructor() {}
}