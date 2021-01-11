export declare class ParameterGroupModel {
    parameterGroupCode: string;
    parameterGroupName: string;
}
export declare class ParameterModel extends ParameterGroupModel {
    parameterCode: string;
}
export declare class ParameterI18nModel extends ParameterModel {
    parameterValue: string;
    locale: string;
}
