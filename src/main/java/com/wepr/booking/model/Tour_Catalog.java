package com.wepr.booking.model;
import com.wepr.booking.model.embedded.TourCatalogId;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
@Getter
@Setter
@Entity
@Table(name = "tourCatalog")
public class Tour_Catalog implements Serializable {
    @EmbeddedId
    private TourCatalogId id;
    @ManyToOne
    @MapsId("tourID")
    private Tour tour;
    @ManyToOne
    @MapsId("catalogID")
    private Catalog catalog;
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "TourID")
//    private Integer tourID;
//    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "CatalogID")
//    private Integer catalogID;
//    @ManyToOne
//    @JoinColumn(name = "TourID", referencedColumnName = "tourID", insertable = false, updatable = false)
//    private Tour tour;
//    @ManyToOne
//    @JoinColumn(name = "CatalogID", referencedColumnName = "catalogID", insertable = false, updatable = false)
//    private Catalog catalog;
//
//    public Integer getTourID() {
//        return tourID;
//    }
//
//    public void setTourID(Integer tourID) {
//        this.tourID = tourID;
//    }
//
//    public Integer getCatalogID() {
//        return catalogID;
//    }
//
//    public void setCatalogID(Integer catalogID) {
//        this.catalogID = catalogID;
//    }
//
//    public Tour getTour() {
//        return tour;
//    }
//
//    public void setTour(Tour tour) {
//        this.tour = tour;
//    }
//
//    public Catalog getCatalog() {
//        return catalog;
//    }
//
//    public void setCatalog(Catalog catalog) {
//        this.catalog = catalog;
//    }
}
