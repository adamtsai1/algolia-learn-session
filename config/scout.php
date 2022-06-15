<?php

use craft\elements\Entry;
use craft\elements\db\EntryQuery;
use rias\scout\IndexSettings;
use rias\scout\ScoutIndex;

return [
    "application_id" => getenv('ALGOLIA_APPLICATION_ID'),
    "admin_api_key" => getenv('ALGOLIA_ADMIN_API_KEY'),
    'search_api_key' => getenv('ALGOLIA_SEARCH_API_KEY'),
    'indices' => [
        ScoutIndex::create(getenv('ENVIRONMENT') . '_employees')
            ->indexSettings(
                IndexSettings::create()
                    ->attributesForFaceting([
                        'jobTitle',
                        'department',
                    ])
                    ->hitsPerPage(6)
                    ->searchableAttributes([
                        'firstName',
                        'lastName',
                    ])
            )
            ->elementType(Entry::class)
            ->criteria(function (EntryQuery $query) {
                return $query->section('employees');
            })
            ->transformer(function (Entry $employee) {
                return [
                    'id' => $employee->id,
                    'slug' => $employee->title,
                    'firstName' => $employee->firstName,
                    'lastName' => $employee->lastName,
                    'jobTitle' => $employee->jobTitle,
                    'department' => $employee->department,
                    'years' => $employee->years,
                ];
            })
    ],
];
