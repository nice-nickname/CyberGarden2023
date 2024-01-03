package ru.xyecos.domain

data class Station(
    val id: Int,
    val title: String,
    val isLoginStation: Boolean
)

data class StationData(
    val station: StationInfo,
    val park: Park,
    val way: Way,
    val maxCarriagesCount: Int,
    val locomotives: List<Locomotive>,
    val wagons: List<Wagon>,
    val isVirtual: Boolean
)

data class StationInfo(
    val id: Int,
    val name: String
)

data class Park(
    val id: Int,
    val name: String
)

data class Way(
    val id: Int,
    val name: String
)

data class Locomotive(
    val id: Int,
    val inventoryNumber: String,
    val direction: String
)

data class Wagon(
    val id: Int,
    val inventoryNumber: String,
    val position: Int,
    val type: String,
    val isSick: Boolean,
    val cargo: String,
    val operationState: String,
    val idleDaysLength: Int,
    val owner: String,
    val isWithHatch: Boolean,
    val loadCapacity: Double,
    val daysToRepair: Int,
    val kilometersLeft: Int,
    val isDirty: Boolean,
    val note1: String,
    val note2: String
)

data class WagonTypeList(val wagonTypes: List<String>)

data class OwnersList(val owners: List<String>)

data class OperationsTypesNorms(val operationId: Int, val minutesNorma: Int)

data class OperationsTypes(
    val id: Int,
    val name: String,
    val operations: List<Operation>
)

data class Operation(
    val id: Int,
    val name: String,
    val operationTypeId: Int
)

data class OperationsList(
    val id: Int,
    val visibleNumber: String,
    val startDate: String,
    val endDate: String,
    val normalMinutesLength: Int,
    val operationId: Int,
    val operationName: String,
    val operationTypeId: Int,
    val reasonId: Int,
    val wagonsIds: List<Int>,
    val departureStation: StationInfo,
    val departurePark: Park,
    val departureWay: Way,
    val destinationStation: StationInfo,
    val destinationPark: Park,
    val destinationWay: Way,
    val supplyDirection: String,
    val locomotivesList: List<Locomotive>,
    val operationStatus: String,
    val comment: String
)

data class Cargo(val cargoType: String)

data class Database(
    val stationsList: List<Station>,
    val stationsData: List<StationData>,
    val wagonTypeList: WagonTypeList,
    val ownersList: OwnersList,
    val operationsTypesNorms: List<OperationsTypesNorms>,
    val operationsTypes: List<OperationsTypes>,
    val operationsList: List<OperationsList>,
    val operationReasonsList: List<OperationReasonsList>,
    val cargoTypes: List<Cargo>
)

data class OperationReasonsList(val id: Int, val title: String)

