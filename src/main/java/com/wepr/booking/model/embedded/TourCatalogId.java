package com.wepr.booking.model.embedded;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
@Getter
@Setter
@Embeddable
public class TourCatalogId implements Serializable {
    @Column(name = "TourID")
    private Integer tourID;
    @Column(name = "CatalogID")
    private Integer catalogID;
}
